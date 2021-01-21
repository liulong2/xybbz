import Vue from "vue"
import Vuex from "vuex"
import getters from "./modules/getters";
import mutations from "./modules/mutations"
import actions from "./modules/actions"

Vue.use(Vuex)
const state = {
    isDisplay: false,
    current: [{iconHref: 'mail', iconName: '首页', routerPath: "/home"}],
    //路由集合
    breadListState: [
        {name: '首页', path: '/home'}
    ]
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store
