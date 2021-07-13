const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: '/lib/index.js',
  stats: 'summary',
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'vue2-clipboard.min.js',
    library: {
      name: 'Vue2Clipboard',
      type: 'umd2',
      export: 'default'
    }
  },
  plugins: [
    new TerserPlugin({
      terserOptions: {
        format: {
          comments: false
        }
      },
      extractComments: false
    })
  ]
}
