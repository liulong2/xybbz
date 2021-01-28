import Vue from "vue";
import VueRouter from "vue-router";

const Generator = () => import('../views/xybbz/generator/Generator')
const User = () => import('../views/xybbz/user/User')
const LogIn = () => import('@/views/xybbz/user/LogIn')
const AppMain = () => import('@/components/vueMain/AppMain')
const MyLogin = () => import('@/views/xybbz/user/MyLogin')
const Clock = () => import('@/components/clock/Clock')
const TopDiv = () => import('@/components/tops/TopDiv')
const MyWeather = () => import('@/views/xybbz/MyWeather/MyWeather')
const MyGame = () =>import('@/components/MyGame/MyGame')
const MyLearn = () => import('@/components/Learn/MyLearn')
const MyDetaileLearn = () => import('@/components/Learn/MyDetailedLearn')
const MyLearnFather = () => import('@/components/Learn/MyLearnFather')

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
    /*{
      path: '/learn',
      component: MyLearn,
        /!*children: [
            {
                path: "/detailed",
                component: MyDetaileLearn
            }
        ]*!/
    },*/
    {
        path: "/father",
        component: MyLearnFather,
        children: [
            {
                path: '',
                component: MyLearn,
            },
            {
                path: "/detailed",
                component: MyDetaileLearn
            },
        ]
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
        path: '/home',
        component: AppMain,

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
