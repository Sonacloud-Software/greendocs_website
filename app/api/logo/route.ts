import { NextResponse } from 'next/server'

import { hasS3Credentials } from '@/lib/s3/client'
import { loadLogoFromS3 } from '@/lib/s3/load-logo'

export async function GET() {
  if (!hasS3Credentials()) {
    console.error('[logo] Configure AWS_ACCESS_KEY_ID e AWS_SECRET_ACCESS_KEY no .env')
    return NextResponse.json({ error: 'Credenciais AWS incompletas.' }, { status: 503 })
  }

  try {
    const logo = await loadLogoFromS3()

    if (!logo) {
      return NextResponse.json({ error: 'Logo não encontrada no S3.' }, { status: 404 })
    }

    return new NextResponse(logo.bytes, {
      headers: {
        'Content-Type': logo.contentType,
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    })
  } catch (error) {
    console.error('[logo] Failed to load logo from S3:', error)
    return NextResponse.json({ error: 'Não foi possível carregar a logo.' }, { status: 502 })
  }
}
