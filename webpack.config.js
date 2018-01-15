require('babel-polyfill');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    polyfill: ['babel-polyfill'],
    app: './src/global/js/main.js',
    t1: './src/t1/js/entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
    filename: 'js/[name].bundle.js'
  },
  devtool: 'eval-source-map',
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
        test: /\.(scss)$/,
        use: ExtractTextPlugin.extract({
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
        })
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
    new ExtractTextPlugin({
      filename: (getPath) => {
        return getPath('css/[name].css').replace('css/js', 'css');
      },
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common'],
      minChunks: Infinity
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: {
          safari10: true
        }
      }
    })
  ]
};
