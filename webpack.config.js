var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index : './example/index.jsx'
  },
  //入口文件输出配置
  output: {
    path: path.join(__dirname, './dist/example'),
    filename: '[name].js'
  },
  //devtool:"source-map",
  module: {
    //加载器配置
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  //其它解决方案配置
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html'
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './example'),
    },
    port: 5997,
    hot: true,
  }
};