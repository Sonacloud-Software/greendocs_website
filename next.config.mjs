/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3-greendocs-095523580376-us-east-2-an.s3.us-east-2.amazonaws.com',
        pathname: '/statics/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/vault',
        destination: 'https://v0-greendocs-interface.vercel.app/vault',
      },
      {
        source: '/vault/:path*',
        destination: 'https://v0-greendocs-interface.vercel.app/vault/:path*',
      },
    ]
  },
}

export default nextConfig
