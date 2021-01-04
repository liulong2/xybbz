import Vue from "vue";
import VueRouter from "vue-router";

const Generator =() => import('../views/xybbz/generator/Generator')
const test2 =() => import('../views/xybbz/generator/test2')
const User = () => import('../views/xybbz/user/User')
const LogIn = () => import('@/views/xybbz/user/LogIn')
const BottomLayer = () => import('@/components/BottomLayer/BottomLayer')
const AppMain = () => import('@/components/vueMain/AppMain')
const MyHome = () => import('@/views/xybbz/MyHome/MyHome')

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/login",
        name: '默认跳转'
    },/*{
        path: '/generator',
        component: Generator
    },*/
    {
        path: '/user',
        component: User,
        name: '登陆2'
    },
    {
        path: '/login',
        component: LogIn,
        name: '登陆'
    },
    {
        path: '/test2',
        component: test2,
        name: 'ceshi'
    },
    /*{
        path: '/bottomLayer',
        component: BottomLayer
    },*/
    {
        path: '/appMain',
        component: AppMain,
        redirect: '/home',
        name: '首页',
        children : [
            {
                path: '/generator',
                component: Generator,
                name: '代码生成',
                meta: {
                    breadNumber: 2
                }
            },
            {
                path: '/home',
                component: MyHome,
                name: '首页',
                meta: {
                    breadNumber: 1
                }
            },
            {
                path: '/bottomLayer',
                component: BottomLayer
            },
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'

})

export default router;
