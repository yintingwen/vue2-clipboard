const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: '/demo/esm.js',
  stats: 'errors-only',
  plugins: [
    new HtmlWebpackPlugin({
      template: './demo/esm.html'
    })
  ],
  devServer: {
    open: true,
    clientLogLevel: 'silent',
  }
}
