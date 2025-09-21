/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Permite que o app funcione offline
    swcMinify: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configurações para otimização
  compress: true,
  poweredByHeader: false,
  // Headers para melhor cache e funcionamento offline
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
