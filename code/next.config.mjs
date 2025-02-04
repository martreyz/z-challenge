/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "prueba-tecnica-api-tienda-moviles.onrender.com",
        pathname: "/images/*", // Matches all images in the /images/ path
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
