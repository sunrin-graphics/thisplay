/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(mp4|ogg)$/, // 로더를 적용할 파일 유형
      exclude: /(node_modules|bower_components)/,
      use: {
        // 해당 파일에 적용할 로더의 이름
        loader: "file-loader",
        options: {
          name: "assets/media/[name].[ext]?[hash]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
