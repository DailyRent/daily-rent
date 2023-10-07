/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: "ua",
    locales: ["default", "ua", "en"],
    localeDetection: false,
  },

  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    TELEGRAM_API: process.env.TELEGRAM_API,
  },
};

module.exports = nextConfig;
