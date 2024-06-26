/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        // unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        domains: ['res.cloudinary.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com"
            }


        ]
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
