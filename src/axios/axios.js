import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from '@/utils/auth'
import {serialize} from '@/utils/utils'
import axios from "axios";

// Vue.use(axios, VueAxios);
//设置超时时间
axios.default.timeout = 20000
axios.default.baseUrl = process.env.BASE_URL

//设置返回状态码
axios.default.validateStatus = (status) => {
    return status === 200;
}
// 每次请求携带cookies信息
axios.defaults.withCredentials = true
//设置进度条
NProgress.configure({
    minimum: 0.07,
    showSpinner: false
})

axios.interceptors.request.use(config => {
    NProgress.start()
    const meta = config.meta;
    console.log(config.isToken)
    const istoken = config.isToken === false;
    console.log(istoken);

    if (getToken() && !istoken) {
        config.headers["Authorization"] = getToken()
    }

    //将数据进行序列化,将对象中的字节组织成(顺序的)字节流的过程。去地址,节省空间
    if (config.method === 'post' && meta) {
        config.data = serialize(config.data)
    }
    return config
}, error => {
    return Promise.reject(error)
})
axios.interceptors.response.use(res => {
    NProgress.done()
    const status = res.data.status
    const message = res.msg
    //可以预留放行的状态码
    //预留登陆
    if (status !== 200) {
        return Promise.reject(new Error(message))
    }
    return res
}, error =>{
    return Promise.reject(new Error(error))
})

export default axios
