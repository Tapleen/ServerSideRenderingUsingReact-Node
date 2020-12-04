const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/client/index.js',

  // externals: [nodeExternals()],

  output: {
    path: path.resolve(__dirname, 'client-build'),
    filename: 'client.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};