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

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: "file-loader",
        },
      ],
    });

    return config;
  },

  // webpack: async function (config) {
  //   return config;
  // },
};
module.exports = nextConfig;
