module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/',
        publicPath: '/',
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    }
};
