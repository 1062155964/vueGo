import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    // path 网页显示的路径
    path: '/',
    name: 'Home',
    component: Home
  }]
})
