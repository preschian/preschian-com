var webpack = require('webpack')
var path    = require('path')
var Dotenv  = require('dotenv-webpack')

var BUILD_DIR   = path.join(__dirname, 'build/jsx')
var DIST_DIR    = path.join(__dirname, 'dist/assets/js')

var config = {
  devtool: 'cheap-module-source-map',
  entry: BUILD_DIR + '/script.js',
  output: {
    path: DIST_DIR,
    filename: 'script.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      }
    }),
    new Dotenv({
      path: './.env',
      safe: true
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: BUILD_DIR,
      loader: 'babel'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  }
}

module.exports = config
