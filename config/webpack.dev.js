const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: '/demo/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/index.html'
    })
  ],
  devServer: {
    open: true,
    clientLogLevel: 'silent',
  }
}
