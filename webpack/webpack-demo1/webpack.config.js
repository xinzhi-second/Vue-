// 导入node.js中专门操作路径的模块
const path = require('path')

// 导入生成预览页面插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 创建插件的实例对象
const htmlPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',   // 指定要用到的模板文件
    filename: 'index.html'    //指定生成的文件名称，该文件存在于内存中，在目录中不显示
})

// 导入vue加载器插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    // 编译模式
    mode: 'development', // development   production
    entry: path.join(__dirname, './src/index.js'),   //入口
    output: {
        path: path.join(__dirname, './dist'),  // 输出文件的存放路径
        filename: 'bundle.js' // 输出文件的名称
    },   // 出口
    plugins: [htmlPlugin, new VueLoaderPlugin()],  // plugins 数组是 webpack 打包期间会用到的一些插件列表
    // 所有第三方文件模块的匹配规则
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: ['url-loader?limit=16940']},
            // exclude 为排除项，表示 babel-loader 不需要处理 node_modules 中的js文件
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, use: ['vue-loader']},
        ]
    }
}