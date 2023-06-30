const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Shopping',
            filename: 'index.html',
            template: './src/html/tempIndex.html',
        }),
        new HtmlWebpackPlugin({
            title: 'About',
            filename: 'about.html',
            template: './src/html/tempAbout.html',
        }),
    ],

    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    }
};

// const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//     mode: 'development',
//     entry: path.resolve(__dirname, './src/js/app.js'),
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },

//     module: {
//         rules: [
//             {
//                 test: /\.css$/i,
//                 use: ["style-loader", "css-loader"]
//             }
//         ]
//     },

//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'Shopping',
//             filename: 'index.html',
//             template: './src/html/tempIndex.html'
//         }),
//         new HtmlWebpackPlugin({
//             title: 'About',
//             filename: 'about.html',
//             temlate: './src/tempAbout.html'
//         })
//     ]
// }