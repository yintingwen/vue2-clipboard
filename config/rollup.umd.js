import { terser } from 'rollup-plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

module.exports = {
  input: './src/entry/umd.js',
  output: {
    file: './dist/vue2-clipboard.min.js',
    format: 'umd',
    name: 'Vue2Clipboard',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    }),
    terser({
      format: {
        comments: false
      }
    })
  ]
}
