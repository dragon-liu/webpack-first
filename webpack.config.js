//webpack.config.js
module.exports = {
  mode: "development",
  module: {
      rules: [
          {
              test: /\.jsx?$/, //匹配规则
              use: ['babel-loader'],
              exclude: /node_modules/ //排除 node_modules 目录
          }
      ]
  }
}
