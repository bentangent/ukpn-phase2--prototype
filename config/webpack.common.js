require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const entryPoints = require('./entryPoints');
const data = require('../api/data.json');



module.exports = {
  entry: entryPoints.getEntryPoints(),
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name]/js/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader?name=[name]/html/[name].html'
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader',
            options: {
              minimize: false,
              conservativeCollapse: false,
              collapseWhitespace: false
            }
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              data: data
            }
          }
        ]
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => {
                  return [
                    autoprefixer
                  ];
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        }))
      },
      {
        test: /\.(png|jpg|svg)$/,
        include: path.resolve(__dirname, 'src/img'),
        use: [
          'file-loader?name=img/[name].[ext]'
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: path.resolve(__dirname, 'src/fonts'),
        use: [
          {
            loader: 'file-loader?name=fonts/[name].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common'],
      minChunks: Infinity
    }),
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('[name]/css/[name].css').replace('css/js', 'css');
      },
      allChunks: true
    }),
    new webpack.EnvironmentPlugin('NODE_ENV')
  ]
};
