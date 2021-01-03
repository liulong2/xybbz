import { SET_IS_DISPLAY } from './modules-methodname'
import {getToken} from '@/utils/auth'
import {isNull} from "../../utils/utils";

export default {
    [SET_IS_DISPLAY](state,payload) {
        if (!isNull(getToken())) {
            state.isDisplay = false
        }
        state.isDisplay = false
    }
}