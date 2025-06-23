/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.pixabay.com/photo/**")],
  },
};

export default nextConfig;
