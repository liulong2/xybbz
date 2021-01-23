import Vue from "vue";
import VueRouter from "vue-router";
import {verificationToken} from "@/api/user";
import {getToken, removeToken} from "@/utils/auth";
import {isNull} from "@/utils/utils";
import {getLocalToken} from "@/utils/local";
import global from "@/config/global";

const Generator = () => import('../views/xybbz/generator/Generator')
const User = () => import('../views/xybbz/user/User')
const LogIn = () => import('@/views/xybbz/user/LogIn')
const AppMain = () => import('@/components/vueMain/AppMain')
const MyHome = () => import('@/views/xybbz/MyHome/MySwiper')
const MyLogin = () => import('@/views/xybbz/user/MyLogin')
const Clock = () => import('@/components/clock/Clock')
const TopDiv = () => import('@/components/tops/TopDiv')
const MyWeather = () => import('@/views/xybbz/MyWeather/MyWeather')
const MyGame = () =>import('@/components/MyGame/MyGame')
const MyLearn = () => import('@/components/Learn/MyLearn')

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/mylogin",
        name: '默认跳转'
    },/*{
        path: '/generator',
        component: Generator
    },*/
    {
      path: '/game',
      component: MyGame
    },
    {
        path: '/user',
        component: User,
        name: '登陆2'
    },
    {
        path: '/ther',
        component: MyWeather
    },
    {
      path: '/learn',
      component: MyLearn
    },
    {
        path: '/top',
        component: TopDiv
    },
    {
        path: '/login',
        component: LogIn,
        name: '登陆'
    },

    {
        path: '/mylogin',
        component: MyLogin
    },
    {
        path: '/clock',
        component: Clock
    },
    {
        path: '/generator',
        component: Generator,
        name: '代码生成',
        meta: {
            breadNumber: 1
        }
    },
    {
        path: '/appMain',
        component: AppMain,
        redirect: '/home',
        name: '首页',
        children: [
            {
                path: '/home',
                component: MyHome,
                name: '首页',
                meta: {
                    breadNumber: 0
                }
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'

})


/*router.beforeEach((to, from, next) => {


    if (to.path !== from.path) {
        next()
    }
  /!*  //取出本地信息
    let keyName = global.breadList;
    let type = false
    let breadListState = getLocalToken({keyName, type})
    // debugger
    if ((to.path === '/mylogin' || to.path === '/') && isNull(getToken())) {
        next()
    } else if (to.path === '/mylogin' && from.path === '/' && !isNull(getToken())) {

        verificationToken(getToken()).then(res => {
            const rout = breadListState.slice(breadListState.length - 1, breadListState.length)
            console.log(rout[0].path);
            next(rout[0].path)
        }).catch(error => {
            removeToken()
            next()
        })

    } else {
        next()
    }*!/
})*/
export default router;
