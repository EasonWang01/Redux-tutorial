var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app:[
    'webpack-hot-middleware/client',
    './client/client.js'
  ],
  vendor:['react','react-dom']
},

  output: {
    path: require("path").resolve("./dist"),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
     new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015','stage-0', 'react-hmre']
        }
      }
    ]
  }
}
