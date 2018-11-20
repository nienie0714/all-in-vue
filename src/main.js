import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import axios from 'axios';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import '../static/css/theme-green/index.css'; // 浅绿色主题
import '../static/css/icon.css';
import 'babel-polyfill';

Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;

//WebSocket封装方法
import * as socketApi from './api/socket';
Vue.prototype.socketApi = socketApi;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
