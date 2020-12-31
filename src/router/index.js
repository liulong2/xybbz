import Vue from "vue";
import VueRouter from "vue-router";

const Generator =() => import('../views/xybbz/Generator')

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: "/generator"
    },{

    }
]

const router = new VueRouter({
    routes,
    mode: 'history'

})

export default router;
