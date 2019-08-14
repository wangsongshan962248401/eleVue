import Vue from 'vue'
import App from './App'
import router from './router/router'
import store from './vuex/store' // 引入store
//引入并使用Vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
//引入样式重置文件
import "@/assets/css/reset.css"
//引入Js文件
import "@/assets/js/resize.js"
Vue.use(VueAxios, axios)
Vue.use(Vant);

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    config.withCredentials = true; // 允许携带token ,这个是解决跨域产生的相关问题

    return config;
  },
  error => {
    return Promise.error(error);
  })
Vue.use(VueAxios,axios);
