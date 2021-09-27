module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ]
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        version: require('@babel/runtime-corejs3/package.json').version
      }
    ]
  ],
  exclude: /node_modules/
}
