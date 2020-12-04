const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        chunkFilename: 'assets/js/[name].[chunkhash].index.js',
        filename: 'assets/js/[name].[chunkhash].index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    performance: {
        maxEntrypointSize: 550000,
        maxAssetSize: 550000,
    },
    optimization: {
        minimize: false,
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            minify: false
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/style.css'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin({})
    ],
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            },
            {
                test: /\.m?js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                loader: 'file-loader',
                options: {
                    limit: 550000,
                    name: 'assets/imgs/[name].[ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options: {
                    limit: 550000,
                    name: 'assets/fonts/[name].[ext]'
                }
            },
        ],
    },
    /*
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    */
};