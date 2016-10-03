import 'webpack';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

module.exports = {
    entry: {
        'blender': './src/blender.scss',
    },
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].css',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader:  ExtractTextPlugin.extract('raw!postcss!sass!import-glob'),
            }
        ],
    },
    plugins: [
        new ExtractTextPlugin('blender.css')
    ],
    postcss() {
        return [ autoprefixer ];
    }
};

