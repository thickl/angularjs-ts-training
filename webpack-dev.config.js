const path = require('path');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.js');
const DESTINATION = path.resolve(__dirname, '.tmp');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, ".tmp"),
        compress: true,
        port: 9000,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                pathRewrite: {'^/api': ''}
            }
        }
    },

    output: {
        path: DESTINATION,
        filename: 'js/index.js'
    },
});
