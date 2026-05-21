/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/AI-for-Librarians',
  assetPrefix: '/AI-for-Librarians',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
