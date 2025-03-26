/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true  // This is needed for static export
  },
};

export default nextConfig;
