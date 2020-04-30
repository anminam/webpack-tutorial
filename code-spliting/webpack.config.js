const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode:'none',
    entry: './index.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // plugins: [
    //     new MiniCssExtractPlugin()
    // ]
}