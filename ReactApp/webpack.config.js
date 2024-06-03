// need to specify entry point (file name + path) ==> next the module dependencies   
    // default configuration ==> ./src/index.html
// once - minification, transpilation, reference resolution, buindling is done
// need to specify the ouput path and the name of the file <bundle.js>
// all modules that wepack is dependent on is termed as loaders needs

const HtmlWebpackPlugin = require("html-webpack-plugin");  // to load the index html file on request
let path = require("path") // path module of node framework


config = {
    output:{
        path: path.join(__dirname, '/dist'), // dist - distribution folder (if folder is not present, folder will be created for you)
        filename: 'bundle.js'
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer:{
        port: 9090,
        historyApiFallback: true // localhost:9090/user
    },
    // Rules of how webpack will take out files, compile & bundle them for the browswer
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /nodeModules/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                exclude: /nodeModules/,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html'})] // localhost:9090 - loads the html
}

module.exports = config;