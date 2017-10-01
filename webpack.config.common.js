var webpack = require('webpack');
var path = require('path');
var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
    entry: {
        'app': './assets/app/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{ loader: 'html-loader' }]
            },
            {
                test: /\.css$/,
                loaders: ['raw-loader', 'resolve-url-loader']
            },
            {
                test   : /\.scss$/,
                loaders: ['raw-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            },
             {
                test: /\.(jpe?g|png)$/i,
                loader: 'file-loader'
            },
            {
                test: /\.(gif)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
              }
        ],
        exprContextCritical: false

    }
};