const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const precss = require('precss');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    'main': [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './src/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  postcss() {
    return [precss, autoprefixer];
  },
  progress: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
