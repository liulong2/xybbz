import Vue from 'vue'
import App from './App.vue'
import {DatePicker} from 'ant-design-vue';
import VueAxios from "vue-axios";
import router from "../src/router";
import store from "../src/store";

Vue.use(DatePicker);
Vue.use(router, VueAxios);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
