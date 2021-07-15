import babel from '@rollup/plugin-babel'


module.exports = {
  input: './src/index.js',
  output: {
    file: './dist/vue2-clipboard.esm.js',
    format: 'esm',
    name: 'Vue2Clipboard'
  },
  plugins: [
    babel({
       babelHelpers: 'runtime' 
    })
  ]
}
