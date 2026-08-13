import { S3Client } from '@aws-sdk/client-s3'

export function hasS3Credentials() {
  return Boolean(
    process.env.AWS_ACCESS_KEY_ID?.trim() && process.env.AWS_SECRET_ACCESS_KEY?.trim(),
  )
}

export function getS3Client() {
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID?.trim()
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY?.trim()
  const region = process.env.AWS_REGION?.trim() ?? 'us-east-2'

  if (!accessKeyId || !secretAccessKey) {
    return null
  }

  return new S3Client({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  })
}
