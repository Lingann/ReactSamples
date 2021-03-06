const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "index.js"
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname,'../src'),

        }
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
                test: /\.(css|scss|sass)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            // 这里可以指定一个 publicPath
                            // 默认使用 webpackOptions.output中的publicPath
                            // publicPath的配置，和plugins中设置的filename和chunkFilename的名字有关
                            // 如果打包后，background属性中的图片显示不出来，请检查publicPath的配置是否有误
                            // output: 'css/',
                            publicPath: '../'
                        }

                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jp?g)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        outputPath: (url, resourcePath, context) => {
                            // if (/my-custom-image\.png/.tests(resourcePath)) {
                            //     return `other_public_path/${url}`;
                            // }
                            // if (/..\/img/.tests(resourcePath)) {
                            //     return `img/${url}`;
                            // }
                            // if (/image/.tests(resourcePath)) {
                            //     return `public/image/${url}`;
                            // }

                            return `image/${url}`;
                        },
                        publicPath:  (url, resourcePath, context) => {
                            // if (/my-custom-image\.png/.tests(resourcePath)) {
                            //     return `other_public_path/${url}`;
                            // }
                            // if (/img/.tests(resourcePath)) {
                            //     return `../img/${url}`;
                            // }
                            // if (/image/.tests(resourcePath)) {
                            //     if (process.env.NODE_ENV=== 'dist'){
                            //         return envConfig.ENV_LIST[1].assetsPublicPath +`image/${url}`;
                            //     }else if (process.env.NODE_ENV=== 'production'){
                            //         return envConfig.ENV_LIST[2].assetsPublicPath +`image/${url}`;
                            //     }else {
                            //         return `public/image/${url}`;
                            //     }
                            // }
                            return `image/${url}`;
                        },
                        esModule: false,
                    }
                }],
                // exclude: [path.join(__dirname,'../static_asset')]

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
            // template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            // 这里的配置和webpackOptions.output中的配置相似
            // 即可以通过在名字前加路径，来决定打包后的文件存在的路径
            filename:  'css/[name].[hash].css',
            chunkFilename:'css/[name].[hash].css',
        })
    ]
};
