const path = require('path');

module.exports = {
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ["style-loader", "css-loader" , 'postcss-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'ui.js',
        path: path.resolve(__dirname, '../public/dist/'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './src/'),
        },
        compress: true,
        port: 9000,
    },
};
