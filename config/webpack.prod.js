const merge = require('webpack-merge');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

const pathsToClean = [
  'dist'
]

const cleanOptions = {
  root: path.join(__dirname, '../'),
  dry: true
}

module.exports = merge(common, {
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: {
          safari10: true
        }
      },
      sourceMap: true
    })
  ],
  devtool: "source-map",
});
