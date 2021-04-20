module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'static',  // 存储硬盘路径
            publicPath: '_next/static', // 网络资源路径
          },
        },
      ],
     
    })

    return config
  },
}