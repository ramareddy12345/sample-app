/* eslint @typescript-eslint/no-var-requires: 0 */

// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');
const publicPath = '/';

module.exports = {
    entry: {
        index: ['./client/scss/index.scss', './client/entry.tsx']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: publicPath,
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: publicPath
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: publicPath
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|otf|ttf|eot|svg)(\?.*)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024 //10k
                    }
                },
                generator: {
                    filename: 'fonts/[name][ext]'
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*'
            ]
        }),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(process.cwd(), 'template.html')
        })
    ]
};
