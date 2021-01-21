import {BREAD_LIST_MUTATIONS, BREAD_LIST_STATE_ADD, REMOVE_DATA, SET_IS_DISPLAY,TOP_SWITCH} from './modules-methodname'

export default {
    [SET_IS_DISPLAY](state, payload) {
        state.isDisplay = payload
    },
    [TOP_SWITCH](state,payload){
        state.current = []
        state.current.push(payload)
    },
    [BREAD_LIST_STATE_ADD](state, payload) {
        state.breadListState.push(payload)
    },
    [REMOVE_DATA](state, payload) {
        state.breadListState.splice(payload, state.breadListState.length - payload)
    },
    [BREAD_LIST_MUTATIONS](state, payload) {
        state.breadListState = payload
    }
}
