/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.module.rules.push({
      test: /\.(mp3|ogg)$/,
      exclude: config.exclude,
      use: [{
        loader: require.resolve("url-loader"),
        options: {
          limit: config.inlineImageLimit,
          fallback: require.resolve("file-loader"),
          publicPath: `${config.assetPrefix}/_next/static/images/`,
          outputPath: `${isServer ? "../" : ""}/_next/static/images/`,
          name: "[name]-[hash].[ext]",
          esModule: config.esModule || false
        },
      }]
    });
    return config;
  }
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true,

});

module.exports = withBundleAnalyzer(nextConfig)
