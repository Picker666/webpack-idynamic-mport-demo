const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    mode: 'development',
    devServer:{
        port:8090,
        hot: true,
        //新建public文件夹，当项目启动时访问的地址为8090，内容为public文件夹下的index.html，如果不配置就会显示Cannot GET /
        static: path.join(__dirname, 'public'),
    },
    target: "web",
    plugins:[
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './src/index.html'),
        filename: 'index.html',
      }),
    ],
     // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, 'src'),
    //   },
    // },
};
