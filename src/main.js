import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import VueAxios from "vue-axios";
import router from "../src/router";
import store from "../src/store";
import 'ant-design-vue/dist/antd.css';
import less from 'less';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import vuescroll from "vuescroll";//引入vuescroll
import "vuescroll/dist/vuescroll.css";//引入vuescroll样式
Vue.use(vuescroll);//使用

//組件使用请在这里注册 观看文档: https://www.jianshu.com/p/fe96a103f26a
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'; //导入模组
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]); //使用模组

Vue.use(VueAwesomeSwiper,)
Vue.use(less)
Vue.use(Antd);
Vue.use(router, VueAxios);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
