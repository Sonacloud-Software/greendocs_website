const DEFAULT_LOGO_KEY = 'statics/green_docs_logo.png'

export const LOGO_ALT = 'GreenDocs'

function getBucketName() {
  return process.env.AWS_BUCKET_NAME?.trim() ?? ''
}

function getRegion() {
  return process.env.AWS_REGION?.trim() ?? 'us-east-2'
}

export function getLogoS3Key() {
  return (process.env.EMAIL_LOGO_S3_KEY ?? DEFAULT_LOGO_KEY).trim().replace(/^"|"$/g, '')
}

export function getLogoS3KeyCandidates() {
  const raw = getLogoS3Key()
  const bucket = getBucketName()
  const candidates = [raw]

  if (bucket && raw.startsWith(`${bucket}/`)) {
    candidates.push(raw.slice(bucket.length + 1))
  }

  if (bucket && !raw.startsWith(`${bucket}/`)) {
    candidates.push(`${bucket}/${raw}`)
  }

  if (raw !== DEFAULT_LOGO_KEY) {
    candidates.push(DEFAULT_LOGO_KEY)
  }

  return [...new Set(candidates.filter(Boolean))]
}

export function getLogoPublicUrl() {
  const override = process.env.LOGO_PUBLIC_URL?.trim()
  if (override) {
    return override
  }

  const bucket = getBucketName()
  const key = getLogoS3Key()

  if (!bucket || !key) {
    return null
  }

  const encodedKey = key.split('/').map(encodeURIComponent).join('/')

  return `https://${bucket}.s3.${getRegion()}.amazonaws.com/${encodedKey}`
}

export function getSiteLogoSrc() {
  return process.env.NEXT_PUBLIC_LOGO_SRC?.trim() ?? '/api/logo'
}
