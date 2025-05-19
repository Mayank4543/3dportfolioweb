/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  output: 'standalone',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
