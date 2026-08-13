import { GetObjectCommand } from '@aws-sdk/client-s3'

import { getLogoS3KeyCandidates } from '@/lib/assets/logo'
import { getS3Client } from '@/lib/s3/client'

export async function loadLogoFromS3() {
  const bucket = process.env.AWS_BUCKET_NAME?.trim()
  const client = getS3Client()

  if (!client || !bucket) {
    return null
  }

  let lastError: unknown

  for (const key of getLogoS3KeyCandidates()) {
    try {
      const object = await client.send(
        new GetObjectCommand({
          Bucket: bucket,
          Key: key,
        }),
      )

      if (!object.Body) {
        continue
      }

      const bytes = await object.Body.transformToByteArray()

      console.info('[logo] Loaded from S3 key:', key)

      return {
        bytes: Buffer.from(bytes),
        contentType: object.ContentType ?? 'image/png',
        key,
      }
    } catch (error) {
      lastError = error
    }
  }

  if (lastError) {
    throw lastError
  }

  return null
}
