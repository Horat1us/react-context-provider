/**
 * Author: Alexander <Horat1us> Letnikow
 * Support: reclamme@gmail.com
 *
 * This file is Dark and full of Terrors
 */

const
    path = require('path'),
    webpack = require('webpack');


const CleanWebpackPlugin = require('clean-webpack-plugin');


const config = {
    entry: ["./src/index.ts"],

    devServer: {
        publicPath: "/",
        contentBase: './web',
        noInfo: false,
        hot: true,
        inline: true,
        open: true,
        historyApiFallback: true,
        port: 8089,
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./build'),
        publicPath: "/",
    },

    resolve: {
        extensions: [".ts", ".js", ".json", ".jsx", ".tsx",],
        modules: [
            path.resolve('node_modules'),
            path.resolve('src'),
        ]
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loaders: [
                    {
                        loader: "babel-loader",
                        query: {
                            presets: ['es2015', 'react', 'stage-0'],
                        },
                    },
                    "awesome-typescript-loader"
                ],
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new CleanWebpackPlugin(path.resolve('./build')),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.NodeEnvironmentPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
            },
        }),
    ]
};

config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        },
        minimize: true,
        comments: false,
    })
);

module.exports = config;