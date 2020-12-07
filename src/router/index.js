import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'

Vue.use(Router)

export default new Router({
  //路由配置表
  routes:[
    {
    path:'/login',
    name:'login',
    component:Login
  }
  ]
})
