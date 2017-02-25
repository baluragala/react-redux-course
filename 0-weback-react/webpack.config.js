/**
 * Created by baluteju on 2/25/2017.
 */
var path = require('path');

module.exports = {
    entry: './app/hello-webpack.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};