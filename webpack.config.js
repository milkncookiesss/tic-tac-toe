const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './client'),
  output: {
    path: path.resolve(__dirname, './static'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js[x]?/,
        loader: 'babel-loader',
        exclude: /(node_modules|dep)/,
        options: {
          presets: ['react', 'env']
        }
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }],
        // include: __dirname + '/client'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};