import { terser } from 'rollup-plugin-terser'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const minPlugins = [
  resolve(),
  commonjs(),
  terser()
]

module.exports = {
  input: './lib/index.js',
  output: {
    file: './dist/vue2-clipboard.min.rollup.js',
    format: 'esm',
    name: 'Vue2Clipboard'
  },
  plugins: process.env.BUILD_MODE === 'min' ? minPlugins : []
}
