'use strict'
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve('dist'),
        filename: 'pixi-rocket.js'
    },
    resolve: {
        modules: [
            "node_modules"
        ],
        alias: {
            '@': resolve('src'),
            '@pixi': resolve('src/pixi')
        }
    },
    module: {
        rules: [
            {
                test: /\.(glsl|frag|vert)$/,
                use: 'raw-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(glsl|frag|vert)$/,
                use: 'glslify-loader',
                exclude: /node_modules/
            }
        ]
    }
};
