import Vue from "vue"
import Vuex from "vuex"
import getters from "./modules/getters";
import mutations from "./modules/mutations"
import actions from "./modules/actions"
Vue.use(Vuex)

const state = {
    isDisplay: true
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store
