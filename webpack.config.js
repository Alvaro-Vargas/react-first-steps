const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    // here is where the transpile code will be sent to
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js' // This is what the file will be called after transpiled
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: { // Inform Webpack who will handle each type of file
    // I.e: Whenever webpack finds a JS file, babel must transpile it.
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // Usually this modules are already transpiled
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
}