const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const { SourceMapDevToolPlugin } = require('webpack');
const {
    NODE_ENV = 'production',
} = process.env;
module.exports = {
    context: __dirname,
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    devtool: false,
    output: {
        libraryTarget: 'commonjs',
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({})]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader"
                }
            }
        ]
    },
    optimization: {
        usedExports: true
    },
    plugins: [
        new SourceMapDevToolPlugin({
            moduleFilenameTemplate: '[resource-path]',
            sourceRoot: '..'
        })
    ]
}
