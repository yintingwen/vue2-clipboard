module.exports = {
  presets: ['preset-env'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        version: require('@babel/runtime-corejs3/package.json').version
      }
    ]
  ]
}
