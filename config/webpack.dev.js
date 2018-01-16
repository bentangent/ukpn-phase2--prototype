const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
const entryPoints = require('./entryPoints');


module.exports = merge(common, {  
  entry: entryPoints.getEntryPoints([hotMiddlewareScript]),
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'eval-source-map',
});
