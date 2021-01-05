import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import VueAxios from "vue-axios";
import router from "../src/router";
import store from "../src/store";
import 'ant-design-vue/dist/antd.css';
import less from 'less'

Vue.use(less)
Vue.use(Antd);
Vue.use(router, VueAxios);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
