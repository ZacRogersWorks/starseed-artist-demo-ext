const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
    entry: {
        popup: path.resolve('src/popup/popup.tsx'),
        options: path.resolve('src/options/options.tsx'),
        background: path.resolve('src/background/background.tsx'),
        contentScript: path.resolve('src/contentScript/contentScript.tsx'),
        progContentScript: path.resolve('src/contentScript/progContentScript.tsx')
    },
    module: {
        rules: [
            {
                use: 'ts-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                          importLoaders: 1,
                        },
                    },
                    {
                    loader: 'postcss-loader', // postcss loader needed for tailwindcss
                    options: {
                      postcssOptions: {
                        ident: 'postcss',
                        plugins: [tailwindcss, autoprefixer],
                      },
                    },
                },
              ],
            },
            {
                type: 'asset/resource',
                test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
            },
        ]
    },
    "plugins": [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new CopyPlugin({
            patterns: [{
                from: path.resolve('src/static'),
                to: path.resolve('dist')
            }]
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src/popup/popup.html'),
            filename: 'popup.html',
            chunks: ['popup']
        }),
        ...getHtmlPlugins([
            'options',
        ])
    ],
    resolve: {
        extensions: ['.tsx', '.js', '.ts']
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    }
}

function getHtmlPlugins(chunks){
    return chunks.map(chunk => new HtmlWebpackPlugin({
        title: 'Starseed Artist Extension',
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}