import {BREAD_LIST_STATE_ADD, SET_IS_DISPLAY, REMOVE_DATA, BREAD_LIST_MUTATIONS} from './modules-methodname'
export default {
    setDisplay(context,payload) {
        context.commit(SET_IS_DISPLAY)
    },
    addBreadListState(context,payload) {
        context.commit(BREAD_LIST_STATE_ADD,payload)
    },
    removeBreadListState(context,payload) {
        context.commit(REMOVE_DATA,payload)
    },
    addAllBreadListState(context,payload) {
        context.commit(BREAD_LIST_MUTATIONS,payload)
    }

}
