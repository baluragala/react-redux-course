/**
 * Created by baluteju on 2/25/2017.
 */
var path = require('path');

module.exports = {
    entry: './app/hello-react.js',
    output: {
        filename: 'bundle-react.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};