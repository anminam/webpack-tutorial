const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/app.js',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devtool: 'source-map'
}
