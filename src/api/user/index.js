import axios from '../../axios/axios'

export const logIn = (userName, password) => {
    return axios({
        url: "/api/auth/login",
        method: 'post',
        params: {
            userName,
            password
        }
    })
}

export const verificationToken = (token) => {
    return axios({
        url: "/api/user/blog/verification",
        method: 'post',
        params: {
            token
        }
    })
}
