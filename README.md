# webpacktodo
用webpack打包vue项目的demo
问题1：
安装npm时，报错rollbackFailedOptional: verb npm-session的解决办法
解决：
先执行npm config set registry http://registry.npm.taobao.org(淘宝镜像)
再执行安装命令
安装的依赖包
npm install vue vue-loader webpack

npm install css-loader vue-template-compiler
npm install style-loader url-loader file-loader
npm install stylus-loader stylus

webpack-dev-server 是一个webpack的包 cross-env 在不同的环境上设置不同的环境变量不一样，cross-env解决了这个问题 安装
npm install webpack-dev-server
npm install cross-env

npm i html-webpack-plugin

问题2：
Module Error (from ./node_modules/vue-loader/lib/index.js):
vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config.

解决：
webpack.config.js里面添加：
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
   plugins:[        
        new VueLoaderPlugin() //new一个实例
    ]
}
