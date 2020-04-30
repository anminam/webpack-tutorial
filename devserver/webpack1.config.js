const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'none',
    entry: './src/app.js',
    output: {
        filename: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpb|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    // 파일관에 연관관계를 해석해나갈때 해석방법
    resolve: {
        alias: { // 별칭
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*','.js','.vue', '.json']
    },
    devServer: {

    },
    // 이건 찾아보자 - 결과물에 사이즈가 초과가 되면 웹팩에서 제안한 사이즈를 초과하면 워닝등등...
    perfomance: {

    },
    devtool: '#eval-source-map'
}

if(process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || [])
}