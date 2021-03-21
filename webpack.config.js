const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports= {
entry: './src/index.js' ,
output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js"
}, 
mode: "production",
devServer:{
open:true
},
plugins: [
new CleanWebpackPlugin(),
new HTMLWebpackPlugin({
    template: '.src/public/index.html',
    inject: "body",
}
    )
]
}