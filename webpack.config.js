var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname + '/sushi',
  entry: createEntry(),

  output: {
    filename: 'app.js',
    path: __dirname + '/dist',
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'sushi')
    },{
      test: /\.s?css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
    },{
      test: /\.html$/,
      loader: 'file?name=[name].[ext]',
    }]
  },

  plugins: createPluginList(),

  postcss: [ autoprefixer({ browsers: ['Explorer >= 9', 'Safari >= 8', 'last 5 Chrome versions', 'last 5 Firefox versions', 'last 2 versions'] }) ]
}

function createEntry() {
  var entry = {
    javascript: './index.js'
  };
  if (process.env.NODE_ENV !== 'production') {
    entry.html = './index.html';
  }
  return entry;
}

function createPluginList() {
  var plugins = [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ];
  if (process.env.NODE_ENV === 'production') {
    plugins = plugins.concat([
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false
        }
      })
    ])
  }
  return plugins;
}
