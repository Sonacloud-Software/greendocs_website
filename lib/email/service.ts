import { getLogoUrl } from '@/lib/s3/logo-url'
import {
  buildContactEmailHtml,
  buildContactEmailSubject,
  buildContactEmailText,
} from '@/lib/email/templates/contact'
import type { ContactFormData, SendEmailResult } from '@/lib/email/types'

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email'

function getEmailConfig() {
  const apiKey = process.env.BREVO_API_KEY?.trim()
  const to = (process.env.CONTACT_EMAIL_TO ?? 'hello@greendocs.com').trim()
  const from = (process.env.CONTACT_EMAIL_FROM ?? 'GreenDocs <contato@greendocs.com>')
    .trim()
    .replace(/^"|"$/g, '')

  return { apiKey, to, from }
}

function parseEmailAddress(value: string) {
  const match = value.match(/^(.+?)\s*<([^>]+)>$/)

  if (match) {
    return { name: match[1].trim(), email: match[2].trim() }
  }

  return { email: value.trim() }
}

function parseBrevoErrorMessage(errorBody: string) {
  try {
    const parsed = JSON.parse(errorBody) as { message?: string }
    return parsed.message ?? errorBody
  } catch {
    return errorBody
  }
}

function isInvalidSenderError(message: string) {
  return /sender.*not valid|validate your sender|authenticate your domain/i.test(message)
}

export async function sendContactEmail(data: ContactFormData): Promise<SendEmailResult> {
  try {
    const { apiKey, to, from } = getEmailConfig()

    if (!apiKey) {
      console.error('[email] BREVO_API_KEY is not configured')
      return { success: false, error: 'Serviço de e-mail não configurado.' }
    }

    const sender = parseEmailAddress(from)

    if (!sender.email.includes('@')) {
      console.error('[email] Invalid CONTACT_EMAIL_FROM value:', from)
      return { success: false, error: 'Serviço de e-mail não configurado.' }
    }

    const logoUrl = await getLogoUrl(60 * 60 * 24 * 7)

    const response = await fetch(BREVO_API_URL, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender,
        to: [{ email: to }],
        replyTo: { email: data.email, name: data.name },
        subject: buildContactEmailSubject(data),
        htmlContent: buildContactEmailHtml(data, logoUrl),
        textContent: buildContactEmailText(data),
      }),
    })

    if (!response.ok) {
      const errorBody = await response.text()
      const brevoMessage = parseBrevoErrorMessage(errorBody)
      const invalidSender = isInvalidSenderError(brevoMessage)

      console.error('[email] Brevo rejected contact email:', {
        status: response.status,
        to,
        sender: sender.email,
        message: brevoMessage,
      })

      if (invalidSender) {
        console.error(
          `[email] Configure um remetente verificado na Brevo ou autentique o domínio de ${sender.email}.`,
        )
      }

      return {
        success: false,
        error: 'Não foi possível enviar sua mensagem. Tente novamente em instantes.',
      }
    }

    const responseBody = await response.text()
    let messageId = 'unknown'

    if (responseBody) {
      try {
        const result = JSON.parse(responseBody) as { messageId?: string }
        messageId = result.messageId ?? messageId
      } catch {
        console.warn('[email] Brevo returned a non-JSON success response:', responseBody)
      }
    }

    return { success: true, id: messageId }
  } catch (error) {
    console.error('[email] Unexpected error while sending contact email:', error)
    return {
      success: false,
      error: 'Não foi possível enviar sua mensagem. Tente novamente em instantes.',
    }
  }
}
