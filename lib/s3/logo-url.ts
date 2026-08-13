import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { GetObjectCommand } from '@aws-sdk/client-s3'

import { getLogoPublicUrl, getLogoS3KeyCandidates } from '@/lib/assets/logo'
import { getS3Client, hasS3Credentials } from '@/lib/s3/client'

export async function getLogoUrl(expiresInSeconds = 60 * 60) {
  const bucket = process.env.AWS_BUCKET_NAME?.trim()
  const client = getS3Client()

  if (client && bucket && hasS3Credentials()) {
    for (const key of getLogoS3KeyCandidates()) {
      try {
        return await getSignedUrl(
          client,
          new GetObjectCommand({
            Bucket: bucket,
            Key: key,
          }),
          { expiresIn: expiresInSeconds },
        )
      } catch {
        continue
      }
    }
  }

  return getLogoPublicUrl()
}
