const path=require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const htmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack');
const isDev= process.env.NODE_ENV === 'development'
const config={
    target:"web",
    //入口文件 __dirname指当前目录
    entry:path.join(__dirname,'src/index.js'),
    //输出文件
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    //webpack原生只支持js文件类型，只支持ES5语法，我们使用以.vue文件名结尾的文件时，需要为其指定loader
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
             //将小于1024d的图片转为base64，减少http请求
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: '[name].[ext]'
                        }
                     }
                ]
            },
            //stylus-loader专门用来处理stylus文件，处理完成后变成css文件，交给css-loader.webpack的loader就是这样一级一级向上传递，每一层loader只处理自己关心的部分
            {
                test: /\.styl/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {//提高效率
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    'stylus-loader'
                ]
            },
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{//判断环境
                NODE_ENV:isDev ?'"development"' :'"production"'
            }
        }),
        new htmlWebpackPlugin(),         
        new VueLoaderPlugin() //new一个实例
    ]
}

if(isDev){
    config.devtool="#cheap-module-eval-source-map"//热加载的功能，修改数据不会刷新页面
    config.devServer={
        port:8000,
        host:'0.0.0.0',
        overlay:{
            errors:true
        },
        hot:true,//改了当前组件的代码，只重新渲染当前组件，，不会刷新其他组件
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports=config