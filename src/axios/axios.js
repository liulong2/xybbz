import axios from 'axios'
import VueAxios from "vue-axios";
import Vue from 'vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from '@/utils/auth'
import {serialize} from '@/utils/utils'

Vue.use(axios, VueAxios);
//设置超时时间
Vue.$http.default.timeout = 20000
//设置返回状态码
Vue.$http.default.validateStatus = (status) => {
    return status === 200;
}
// 每次请求携带cookies信息
Vue.$http.defaults.withCredentials = true
//设置进度条
NProgress.configure({
    minimum: 0.07,
    showSpinner: false
})

Vue.$http.interceptors.request.use(config => {
    NProgress.start()
    const meta = config.meta;
    const istoken = config.isToken === false;
    if (getToken() && !istoken) {
        config.headers["token"] = getToken()
    }

    //将数据进行序列化,将对象中的字节组织成(顺序的)字节流的过程。去地址,节省空间
    if (config.method === 'post' && meta) {
        config.data = serialize(config.data)
    }
    return config
}, error => {
    return Promise.reject(error)
})
Vue.$http.interceptors.response.use(res => {
    NProgress.done()
    const status = res.data.status
    //可以预留放行的状态码
    //预留登陆

})
