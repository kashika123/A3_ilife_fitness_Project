const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'developement',
    entry: '/src/index.js',
    output: {
        path: '/public',
        filename: 'index_bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Application name",
        template: './public/index.html',
        favicon: "./public/favicon.ico",
        filename: "index.html",
        manifest: "./public/manifest.json"
    }),

    ],

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(png|jpeg|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    outputPath: "imgs",
                },
            },
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/public'),
        },
        historyApiFallback: true,
        hot: true,
        compress: true,
        port: 9090,
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
}