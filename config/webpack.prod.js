const path = require('path')

module.exports = {
  mode: 'production',
  entry: '/lib/index.js',
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'vue2-clipboard.min.js',
    libraryTarget: 'umd',
  }
}
