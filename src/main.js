import Vue from 'vue'
import App from './App.vue'
import {DatePicker} from 'ant-design-vue';
import axios from "@/axios/axios";
import VueAxios from "vue-axios";
import router from "@/router";
import store from "@/store";

Vue.use(DatePicker);
Vue.use(axios, VueAxios);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
