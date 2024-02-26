/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "d2s742iet3d3t1.cloudfront.net",
          port: "",
          pathname: "/restaurants/**",
        },
      ],
    },
  };
  
  export default nextConfig;