import Vue from "vue";
import VueRouter from "vue-router";

const Generator =() => import('../views/xybbz/generator/Generator')

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/generator"
    },{
        path: '/generator',
        component: Generator
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'

})

export default router;
