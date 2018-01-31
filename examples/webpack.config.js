module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
}