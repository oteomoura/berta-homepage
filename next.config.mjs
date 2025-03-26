/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/berta-homepage',
  images: {
    unoptimized: true  // This is needed for static export
  },
};

export default nextConfig;
