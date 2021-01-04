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
        console.log(payload);
        state.breadListState.push(payload)
    },
    [REMOVE_DATA](state, payload) {
        console.log(payload);
        state.breadListState.splice(payload, state.breadListState.length - payload)
    },
    [BREAD_LIST_MUTATIONS](state,payload) {
        state.breadListState = payload
    }
}