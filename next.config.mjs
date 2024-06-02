/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // unoptimized: true,
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            }
        ]
    },
};

export default nextConfig;
