/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  serverless: true,
  // async redirects() {
  //   return [
  //     {
  //       source: "/((?!soon).*)",
  //       destination: "/soon",
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
