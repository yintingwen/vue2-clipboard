import babel from '@rollup/plugin-babel'

const dependencies = require('../package.json').dependencies

module.exports = {
  input: './src/entry/esm.js',
  output: {
    file: './dist/vue2-clipboard.esm.js',
    format: 'esm',
    name: 'Vue2Clipboard'
  },
  external (id) {
    return /^@babel\/runtime-corejs3/.test(id) || !!dependencies[id]
  },
  plugins: [
    babel({
       babelHelpers: 'runtime'
    })
  ]
}
