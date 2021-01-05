import {SET_IS_DISPLAY, BREAD_LIST_STATE_ADD, REMOVE_DATA, BREAD_LIST_MUTATIONS} from './modules-methodname'
import {getToken} from '@/utils/auth'
import {isNull} from "../../utils/utils";

export default {
    [SET_IS_DISPLAY](state, payload) {
        if (!isNull(getToken())) {
            state.isDisplay = false
        }
        state.isDisplay = false
    },
    [BREAD_LIST_STATE_ADD](state, payload) {
        state.breadListState.push(payload)
        /*console.log(payload);
        console.log(11111)
        let bol = state.breadListState.some(item=>{
            if(item.path === payload.path){
                return true
            }
        })
        if (!bol) {
            state.breadListState.push(payload)
        }*/
    },
    [REMOVE_DATA](state, payload) {
        state.breadListState.splice(payload, state.breadListState.length - payload)
    },
    [BREAD_LIST_MUTATIONS](state, payload) {
        state.breadListState = payload
    }
}
