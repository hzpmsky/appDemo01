const path = require('path');

module.exports = {
    entry: {
        app: './app/js/main.js' //多入口文件配置
    },
    devServer:{
        contentBase:path.join(__dirname,"dist"),// 如果需要提供静态文件，静态文件在哪输出
        compress:true,
        port:9000
    },
    module: {
        // 什么样的文件用什么样的解析器
        loaders: [{
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.scss$/,
                // 多个loade串行解析，解析顺序从右到左
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: {},
    output: {
        filename: '[name].min.js', //name 与app对应
        path: path.resolve(__dirname, 'dist')// 当前路径创建dist目录，构建的文件输出到此目录下
    }
}