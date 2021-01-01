import axios from '../../axios/axios'

export const getList = (userName, password) => {
    return axios({
        url: "/api/auth/login",
        method: 'post',
        params: {
            userName,
            password
        }
    })
}