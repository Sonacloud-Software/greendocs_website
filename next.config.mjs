/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
