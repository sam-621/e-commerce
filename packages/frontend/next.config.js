const Dotenv = require('dotenv-webpack');
const withPlugins = require('next-compose-plugins');

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.plugins.push(new Dotenv({ systemvars: true }));
    return config;
  },
};

module.exports = nextConfig;
