const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.m?js|.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['@babel/preset-env'],
                    //     plugins: ['@babel/plugin-proposal-object-rest-spread']
                    // }
                }
            },
            {
                test: /\.css$/,
                use: {
                    loader: 'style!css'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};