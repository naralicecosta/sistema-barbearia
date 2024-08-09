/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "utf.io",
      },
    ],
  },
}

export default nextConfig
