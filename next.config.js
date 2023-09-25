/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  i18n: {
    defaultLocale: 'ua',
    locales: ['default', 'ua', 'en'],
    localeDetection: false,
  },
};

module.exports = nextConfig;
