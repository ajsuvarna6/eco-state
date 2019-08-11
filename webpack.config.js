const path = require('path');
const config = require('./package.json');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.resolve(__dirname, 'src', config.main),
    mode: process.env.NODE_ENV,
    devtool: isProduction ? false : 'source-map',
    output: {
        library: 'ecoState',
        libraryTarget: process.env.TARGET || 'var',
        path: path.resolve(__dirname, "dist"),
        filename: (isProduction) ? 'eco-state.min.js' : 'eco-state.js'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [
                    path.resolve(__dirname, "dist"),
                    path.resolve(__dirname, "config"),
                    /node_modules/,
                ],
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, "src")
                ]
            }
        ]
    },
    optimization: {
        minimize: isProduction
    }
};
