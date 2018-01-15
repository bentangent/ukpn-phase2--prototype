const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';

module.exports = merge(common, {  
  entry: {
    app: ['./src/global/js/main.js', hotMiddlewareScript],
    t1: ['./src/t1/js/entry.js', hotMiddlewareScript]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
});
