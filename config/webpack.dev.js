const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: '/dist/vue2-clipboard.esm.js',
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
