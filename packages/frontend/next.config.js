const Dotenv = require('dotenv-webpack');
const withPlugins = require('next-compose-plugins');
const path = require('path');

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ['juan-jose-mayorga-projects.s3.amazonaws.com'],
  },
  future: {
    webpack5: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  webpack: (config) => {
    config.plugins.push(new Dotenv({ systemvars: true }));
    return config;
  },
};

module.exports = nextConfig;
