const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {  
  plugins: [
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
