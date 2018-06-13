/* eslint-disable */
const path = require('path');
const withCss = require('@zeit/next-css');
const formatter = require('eslint-friendly-formatter');
// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}
// https://github.com/zeit/next.js/issues/3241
module.exports = withCss({
    webpack: (config, { dev }) => {
      if (dev) {
        config.module.rules.push({
          test: /\.js$/,
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            emitWarning: dev,
            formatter,
            configFile: path.resolve('.eslintrc.js'),
            eslint: {
              configFile: path.resolve(__dirname, '.eslintrc.js')
            }
          }
        })
      }
      return config
    },
    exportPathMap: function(defaultPathMap) {
      return {
        '/': { page: '/' }
      };
    },
    serverRuntimeConfig: { // Will only be available on the server side

    },
    publicRuntimeConfig: { // Will be available on both server and client
        appTitle: 'Fine web craftsmanship since summer&aquo;o 2010'
    },
    // cssModules: true,
    // cssLoaderOptions: {
    //   importLoaders: 1,
    //   localIdentName: "[local]___[hash:base64:5]",
    // }
  })