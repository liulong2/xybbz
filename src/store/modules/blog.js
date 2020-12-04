import {getLocalToken} from "@/utils/local";
import {GET_token, SET_TOKEN} from "@/store/modules/modules-methodname";
import {setToken} from "@/utils/auth";
import {setLocalToken} from "@/utils/local";


const blog = {
    state: {
        token: getLocalToken('token') || ''
    },
    getters: {
        [GET_token](state) {
            return state.token
        }
    },
    //修改
    mutations: {
        //增加
        [SET_TOKEN](state, token) {
            state.token = token
            setToken(token)
            setLocalToken('token', token)
        },

    }

}

export default blog
