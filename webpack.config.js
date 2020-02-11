const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'main.bundle.js'
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 100000
                }
              }
            ]
          },
          {
            test: /\.(css|sass|scss)$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
              'css-loader',
              'sass-loader',
            ],
          },
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".jpg", ".png", ".svg", ".scss", ".css"],
        modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: path.join(__dirname, 'src', 'index.html'),
          // filename: 'index.html'
        }),
        new MiniCssExtractPlugin()
      ]
}

