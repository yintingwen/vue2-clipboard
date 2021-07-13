const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: '/public/lib.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/lib.html'
    })
  ],
  devServer: {
    open: true,
    clientLogLevel: 'silent',
  }
}
