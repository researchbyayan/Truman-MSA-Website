/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/planner", destination: "/events", permanent: true },
      { source: "/leadership", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
