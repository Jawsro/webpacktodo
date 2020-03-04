//优化css
const autoprefixer =require('autoprefixer')

module.exports={
  plugins:[
      autoprefixer()//处理css属性，比如浏览器兼容性前缀
  ]
}