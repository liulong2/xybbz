import Vue from "vue";
import VueRouter from "vue-router";

const Generator =() => import('../views/xybbz/generator/Generator')
const test2 =() => import('../views/xybbz/generator/test2')
const User = () => import('../views/xybbz/user/User')
const LogIn = () => import('@/views/xybbz/user/LogIn')
const BottomLayer = () => import('@/components/BottomLayer/BottomLayer')

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/generator"
    },{
        path: '/generator',
        component: Generator,
        children : [
            {
                path: '/test2',
                component: test2
            }
        ]
    },
    {
        path: '/user',
        component: User
    },
    /*{
        path: '/login',
        component: LogIn
    },*/
    {
        path: '/test2',
        component: test2
    },
    {
        path: '/bottomLayer',
        component: BottomLayer
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'

})

export default router;
