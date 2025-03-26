/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true  // This is needed for static export
  },
};

export default nextConfig;
