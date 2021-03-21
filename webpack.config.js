const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const theme = require('./src/styles/theme')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'http://localhost:9000/',
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        port: 9000,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
        alias: {
            '~': path.join(__dirname, 'src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules)/,
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [require.resolve('@babel/preset-react')],
                },
            },
            {
                test: /\.(css|less)$/,

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                modifyVars: {
                                    'font-family': theme.fontFamily,
                                    'primary-color': theme.primaryColor,
                                    'layout-header-background':
                                        theme.secondaryColor,
                                },
                                javascriptEnabled: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(ttf)$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'icon',
                },
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            title: 'App',
        }),
    ],
}
