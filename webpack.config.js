const path = require('path');
const config = require('./package.json');
const TerserPlugin = require('terser-webpack-plugin');

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
                    path.resolve(__dirname, "__test__"),
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
        minimize: isProduction,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: isProduction, // Must be set to true if using source-maps in production
                terserOptions: {
                    // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
                    parse: {
                        // we want terser to parse ecma 8 code. However, we don't want it
                        // to apply any minfication steps that turns valid ecma 5 code
                        // into invalid ecma 5 code. This is why the 'compress' and 'output'
                        // sections only apply transformations that are ecma 5 safe
                        // https://github.com/facebook/create-react-app/pull/4234
                        ecma: 8,
                    },
                    compress: {
                        ecma: 5,
                        warnings: isProduction,
                        // Disabled because of an issue with Uglify breaking seemingly valid code:
                        // https://github.com/facebook/create-react-app/issues/2376
                        // Pending further investigation:
                        // https://github.com/mishoo/UglifyJS2/issues/2011
                        comparisons: false,
                        // Disabled because of an issue with Terser breaking valid code:
                        // https://github.com/facebook/create-react-app/issues/5250
                        // Pending futher investigation:
                        // https://github.com/terser-js/terser/issues/120
                        inline: 2,
                        drop_console: true,
                    },
                    mangle: {
                        safari10: true,
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        // Turned on because emoji and regex is not minified properly using default
                        // https://github.com/facebook/create-react-app/issues/2488
                        ascii_only: true,
                    },
                    extractComments: 'all',
                }
            }),
        ],
    }
};
