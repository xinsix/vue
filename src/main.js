import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import axios from '../node_modules/axios'
// 设置后端请求地址
//axios.defaults.baseURL='http://localhost:8089';
axios.defaults.baseURL='https://hd.jfgl.xinsix.top/';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
    router
}).$mount('#app');