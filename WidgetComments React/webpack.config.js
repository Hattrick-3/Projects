
const path = require('path');

module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js'
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        loader: 'babel-loader',
        exclude:'/node_modules/'
        },
    ]
  }
};
