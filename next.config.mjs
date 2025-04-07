/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'www.netguru.com'
        }],
        minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days in seconds
        formats: ['image/webp', 'image/avif'],
    },
    async headers() {
        return [
            {
                // Cache all static media files
                source: '/:path*.(jpg|jpeg|png|gif|webp|svg|mp4|webm|ogg|mp3|wav|pdf|ico)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=2592000, s-maxage=31536000, stale-while-revalidate=31536000',
                    },
                ],
            },
        ];
    },
};

export default nextConfig;