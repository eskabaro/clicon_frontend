import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./app/(app)/_config/i18n')

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_API_URL: process.env.BASE_API_URL
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'grokholsky.com'
            }
        ]
    }
}

export default withNextIntl(nextConfig)
