import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
import store from './store/'
import axios from 'axios'
import Loading from './components/loading'
import filters from './filfters/'

Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]));

Vue.use(VueRouter)
Vue.use(Loading)

// 关于axios的配置

axios.interceptors.request.use(function (config) { // requset
  store.dispatch('showLoading')
  return config;
}, function (error) {
  return Promise.reject(error);
})

axios.interceptors.response.use(function (response) { //response
  store.dispatch('hideLoading')
  return response;
}, function (error) {
  return Promise.reject(error);
})


Vue.prototype.$http = axios; // 把axios对象挂载到了Vue上
//console.log(Vue.prototype.$http);

const router = new VueRouter({
  mode: 'history',
  srollBehavior: () => ({
    y: 0
  }),
  routes
});
require('./assets/css/base.css')

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})