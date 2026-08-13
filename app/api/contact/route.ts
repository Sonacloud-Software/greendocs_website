import { NextResponse } from 'next/server'

import { sendContactEmail } from '@/lib/email/service'
import type { ContactFormData } from '@/lib/email/types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function parseContactPayload(body: unknown): ContactFormData | null {
  if (!body || typeof body !== 'object') {
    return null
  }

  const { name, email, message } = body as Record<string, unknown>

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return null
  }

  const trimmedName = name.trim()
  const trimmedEmail = email.trim()
  const trimmedMessage = message.trim()

  if (!trimmedName || trimmedName.length > 100) {
    return null
  }

  if (!trimmedEmail || !EMAIL_PATTERN.test(trimmedEmail) || trimmedEmail.length > 254) {
    return null
  }

  if (!trimmedMessage || trimmedMessage.length > 5000) {
    return null
  }

  return {
    name: trimmedName,
    email: trimmedEmail,
    message: trimmedMessage,
  }
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch (error) {
    console.error('[contact] Invalid JSON body:', error)
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 })
  }

  const payload = parseContactPayload(body)

  if (!payload) {
    return NextResponse.json(
      { error: 'Verifique os campos do formulário e tente novamente.' },
      { status: 400 },
    )
  }

  try {
    const result = await sendContactEmail(payload)

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: result.id })
  } catch (error) {
    console.error('[contact] Failed to send contact email:', error)
    return NextResponse.json(
      { error: 'Não foi possível enviar sua mensagem. Tente novamente em instantes.' },
      { status: 500 },
    )
  }
}
