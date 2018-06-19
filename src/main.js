// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 先在终端install安装fastClick依赖包,再调用解决移动端按键响应有可能慢的问题
import fastClick from 'fastclick'
// 移除浏览器的默认样式，避免不同浏览器出现不同效果
import 'styles/reset.css'
// 引入border.css 解决不同倍像素手机边框px不同的
import 'styles/border.css'
// 在iconfont官网找到对应的图标，引入
import 'styles/iconfont.css'

Vue.config.productionTip = false

fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // es6写法，key值与value值相同时，只写一个，此处的router用于配置路由
  router,
  components: { App },
  template: '<App/>'
})
