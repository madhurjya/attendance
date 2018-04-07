import webpack from 'webpack';
import path from 'path';

export default function (environment) {
    environment = environment ? environment : 3000;
    return {
        entry: 'index.js',
        output: {
            path: path.join(__dirname, '/dist'),
            filename: '[name].[hash].js'
        }
    }
}