/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: false,
    reactStrictMode: false,
    images: {
        domains: [
            'dxb.reselluae.com',
        ],
    },
};

export default nextConfig;