const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'index.html'),
    filename: './index.html',
});
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.join(__dirname, 'src/index.ts'),
    output: {
        library: 'Resizable',
        libraryTarget: 'umd',
        filename: 'resizable.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }],
    },
    plugins: [htmlWebpackPlugin, new CopyPlugin([
        { from: 'dist/index.d.ts', to: path.join(__dirname) },
      ])],
    devServer: {
        port: 3002,
    },
};
