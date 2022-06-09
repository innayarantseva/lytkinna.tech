const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // ???
    entry: './src/main.tsx',
    devtool: 'inline-source-map',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 9000,
        hot: true,
        open: true
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                include: /\.module\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            favicon: './src/images/favicon-32x32.png'
        })
    ]
};
