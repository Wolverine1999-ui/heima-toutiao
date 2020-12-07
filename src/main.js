// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './views/index'
//加载element组件
import ElementUI from 'element-ui';
//加载element组件库的样式
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.config.productionTip = false
//全局注册element组件库
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {index},
  template: '<index/>'
})
