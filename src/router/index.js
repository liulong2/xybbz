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
        redirect: "/login"
    },/*{
        path: '/generator',
        component: Generator
    },*/
    {
        path: '/user',
        component: User
    },
    {
        path: '/login',
        component: LogIn
    },
    {
        path: '/test2',
        component: test2
    },
    {
        path: '/bottomLayer',
        component: BottomLayer
    },
    {
        path: '/appMain',
        component: AppMain,
        redirect: '/home',
        children : [
            {
                path: '/generator',
                component: Generator
            },
            {
                path: '/home',
                component: MyHome
            }
        ]
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'

})

export default router;
