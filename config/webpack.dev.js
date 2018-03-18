const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:5050',
      'webpack/hot/only-dev-server',
      path.resolve(__dirname, '../src/index.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name]-bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    historyApiFallback: true, // redirect 404s to index page
    inline: true,
    hot: true, // enable hot reload
    overlay: true, // display errors in browaer window
    port: 5050,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader'], // can also be like loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', { modules: false }], 'react'],
            plugins: [
              'react-hot-loader/babel',
              'transform-object-rest-spread',
              'transform-class-properties',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        }],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader', // user: ['file-loader']
          options: {
            name: 'fonts/[name].[ext]',
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: {
          loader: 'file-loader', // user: ['file-loader']
          options: {
            name: 'images/[name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    // allow to import both js and jsx
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, '../public/index.html'),
    }),
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true }),
  ],
  devtool: 'source-map',
};
