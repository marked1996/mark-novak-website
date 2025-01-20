/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    middlewarePrefetch: true, // Prefetch middleware for performance optimization
  },
  async redirects() {
    return [
      {
        source: "/soundwave",
        destination: "/",
        permanent: false, // Change to true if it should be a 301 redirect
      },
    ];
  },
};

export default nextConfig;
