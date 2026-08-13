import type { ContactFormData } from '@/lib/email/types'

const LOGO_ALT = 'GreenDocs'

const BRAND = {
  primary: '#147a52',
  primaryDark: '#0f5c3e',
  mint: '#e8f5ef',
  background: '#f6fbf8',
  text: '#1a2e28',
  muted: '#5c6f67',
  border: '#d4e5dc',
  white: '#ffffff',
} as const

export function buildContactEmailSubject({ name }: Pick<ContactFormData, 'name'>) {
  return `[GreenDocs] Contato de ${name}`
}

export function buildContactEmailText({ name, email, message }: ContactFormData) {
  const receivedAt = formatDate(new Date())

  return [
    'GREEN DOCS — NOVO CONTATO PELO SITE',
    '===================================',
    '',
    `Recebido em: ${receivedAt}`,
    '',
    'DADOS DO CONTATO',
    '----------------',
    `Nome:  ${name}`,
    `E-mail: ${email}`,
    '',
    'MENSAGEM',
    '--------',
    message,
    '',
    '---',
    'Responda diretamente a este e-mail para falar com o contato.',
    'GreenDocs · SonaCloud Software',
  ].join('\n')
}

export function buildContactEmailHtml(
  { name, email, message }: ContactFormData,
  logoUrl?: string | null,
) {
  const escapedName = escapeHtml(name)
  const escapedEmail = escapeHtml(email)
  const escapedMessage = escapeHtml(message).replace(/\n/g, '<br />')
  const receivedAt = escapeHtml(formatDate(new Date()))
  const logoBlock = logoUrl
    ? `<img src="${escapeHtml(logoUrl)}" alt="${LOGO_ALT}" width="160" height="32" style="display: block; max-width: 160px; width: 160px; height: auto; border: 0;" />`
    : `<h1 style="margin: 0; font-size: 24px; line-height: 1.2; font-weight: 700; color: ${BRAND.white};">Green<span style="color: #b8e6cf;">Docs</span></h1>`

  return `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <title>Novo contato — GreenDocs</title>
  </head>
  <body style="margin: 0; padding: 0; background-color: ${BRAND.background}; font-family: Arial, Helvetica, sans-serif; color: ${BRAND.text};">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: ${BRAND.background}; padding: 32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; background-color: ${BRAND.white}; border: 1px solid ${BRAND.border}; border-radius: 16px; overflow: hidden;">
            <!-- Header -->
            <tr>
              <td style="background: linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.primaryDark} 100%); padding: 28px 32px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td>
                      <p style="margin: 0 0 10px; font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255, 255, 255, 0.72);">
                        Formulário de contato
                      </p>
                      ${logoBlock}
                    </td>
                    <td align="right" valign="top">
                      <span style="display: inline-block; padding: 6px 12px; border-radius: 999px; background-color: rgba(255, 255, 255, 0.16); font-size: 12px; font-weight: 700; color: ${BRAND.white}; white-space: nowrap;">
                        Novo lead
                      </span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Intro -->
            <tr>
              <td style="padding: 28px 32px 8px;">
                <p style="margin: 0; font-size: 16px; line-height: 1.6; color: ${BRAND.text};">
                  Você recebeu uma nova mensagem pelo site da GreenDocs.
                </p>
                <p style="margin: 8px 0 0; font-size: 13px; line-height: 1.5; color: ${BRAND.muted};">
                  Recebido em ${receivedAt}
                </p>
              </td>
            </tr>

            <!-- Contact details -->
            <tr>
              <td style="padding: 16px 32px 8px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: ${BRAND.mint}; border: 1px solid ${BRAND.border}; border-radius: 12px;">
                  <tr>
                    <td style="padding: 20px 22px;">
                      <p style="margin: 0 0 14px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: ${BRAND.primary};">
                        Dados do contato
                      </p>
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                        <tr>
                          <td style="padding: 0 0 12px; width: 88px; font-size: 13px; font-weight: 700; color: ${BRAND.muted}; vertical-align: top;">
                            Nome
                          </td>
                          <td style="padding: 0 0 12px; font-size: 15px; line-height: 1.5; color: ${BRAND.text}; vertical-align: top;">
                            ${escapedName}
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 0; width: 88px; font-size: 13px; font-weight: 700; color: ${BRAND.muted}; vertical-align: top;">
                            E-mail
                          </td>
                          <td style="padding: 0; font-size: 15px; line-height: 1.5; vertical-align: top;">
                            <a href="mailto:${escapedEmail}" style="color: ${BRAND.primary}; text-decoration: none; font-weight: 600;">
                              ${escapedEmail}
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding: 16px 32px 8px;">
                <p style="margin: 0 0 10px; font-size: 12px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: ${BRAND.primary};">
                  Mensagem
                </p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border: 1px solid ${BRAND.border}; border-radius: 12px;">
                  <tr>
                    <td style="padding: 20px 22px; font-size: 15px; line-height: 1.7; color: ${BRAND.text}; background-color: ${BRAND.white};">
                      ${escapedMessage}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- CTA -->
            <tr>
              <td style="padding: 20px 32px 28px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td style="border-radius: 10px; background-color: ${BRAND.primary};">
                      <a href="mailto:${escapedEmail}?subject=${encodeURIComponent(`Re: Contato GreenDocs — ${name}`)}" style="display: inline-block; padding: 12px 20px; font-size: 14px; font-weight: 700; color: ${BRAND.white}; text-decoration: none;">
                        Responder para ${escapedName}
                      </a>
                    </td>
                  </tr>
                </table>
                <p style="margin: 14px 0 0; font-size: 13px; line-height: 1.5; color: ${BRAND.muted};">
                  Ou responda diretamente a este e-mail — o endereço do contato já está em <strong>Reply-To</strong>.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 18px 32px; border-top: 1px solid ${BRAND.border}; background-color: ${BRAND.background};">
                <p style="margin: 0; font-size: 12px; line-height: 1.6; color: ${BRAND.muted}; text-align: center;">
                  GreenDocs · SonaCloud Software<br />
                  Mensagem enviada automaticamente pelo site greendocs.com
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }).format(date)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}
