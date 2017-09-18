const path = require('path')
module.exports = {
    entry: path.join(__dirname, '/client/src/app.js'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, '/client/dist/js')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.join(__dirname, '/client/src'),
                use: 'babel-loader'
            }
        ]
    },
    watch: true
}