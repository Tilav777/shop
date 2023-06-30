const path = require('path')

module.exports = {
    mode: 'development', // production
    entry: path.resolve(__dirname, './src/js/app.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js'
    }
}