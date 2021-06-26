
// this includes a built in node.js module 'path' so we can use its methods below
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



// exporting this object so webpack can work with it

module.exports = {
    // where webpack will start looking to start bundling dependancies 
    entry: './src/js/index.js',
    // where webpack should save or output or bundle , has to be an object
    output: {
        // the path has to be an absolute path 
        // path.resolve __dir gets our current absolute path and combines it with the dist/js 
        // this creates our path to where we want the webpack output file to go
        path: path.resolve(__dirname, 'dist'),
        // publicpath has to be set to '/' when set to custom domain so it will take new domain name and then add '/' before asset files and load them if set to something else it cant load them.
        // publicpath has to be set to github profile username to serve assets to your github pages if using github pages to display page 
        publicPath: "/",
        // file name for the file that our webpack will output
        filename: 'js/bundle.js',
    },
    // content base point to the folder from which webpack should serve our files here its the 'dist' folder ,
    // the .js and .css and all other files/ folders in this 'dist' folder are what the client will eventually see 
    // the 'src' folder is our development folder where we test and then webpack combines that to the 'dist' .js files etc...
    devServer: {
        contentBase:'./dist',
        hot: true,
    },

    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'css/mystyles.css'
            }),
    ],

    module: {
        rules: [
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                        sourceMap: true,
                        // options...
                        }
                    }
                ]
            },

        ]



    }


}