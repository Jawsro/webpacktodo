// 入口文件
import Vue from 'vue'
import App from './app.vue'

// import"./assets/style/text.css"
import"./assets/style/global.styl"
// import"./assets/image/5.jpg"
const root=document.createElement('div')
document.body.appendChild(root)

new Vue({
  render:(h)=>h(App)
}).$mount(root)