const path = require('path');

module.exports = {
  // Set the mode to development to enable better debugging
  mode: 'development',

  // Define the entry point for Webpack
  entry: './js/main.ts',

  // Configure the output file and directory
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js'),
  },

  // Configure how different modules are treated
  module: {
    rules: [
      {
        // Use ts-loader for all .ts files
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/, // Exclude the node_modules directory
      },
    ],
  },

  // Resolve extensions to allow importing .ts files without specifying the extension
  resolve: {
    extensions: ['.ts', '.js'],
  },

  // Enable source maps for easier debugging in the browser
  devtool: 'inline-source-map',
};
