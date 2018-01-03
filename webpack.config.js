const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, 'src') + '/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$|.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
            title: 'App',
            template: path.join(__dirname, 'src', 'assets', 'template.html'),
        })
    ]
};