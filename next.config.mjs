/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export", // For github pages,
    reactStrictMode: false,
    images: {
        // unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.ophim.live',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
        ]
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
};

export default nextConfig;
