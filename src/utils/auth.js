import Cookies from 'js-cookie'

const Tokenkey = 'js-session-token'
//刷新获取
const refreshTokenKey = 'js-session-refresh-token'

//获得token
export function getToken() {
    return Cookies.get(Tokenkey);
}

//设置token
export function setToken(token) {
    return Cookies.set(Tokenkey, token)
}

//删除初次获取的token
export function removeToken() {
    return Cookies.remove(Tokenkey)
}

//删除刷新后的token
export function removeRefreshToken() {
    return Cookies.remove(refreshTokenKey)
}

//获得刷新后的token
export function getRefreshToken() {
    return Cookies.get(refreshTokenKey)
}

//设置刷新后的token
export function serRefreshToken(token) {
    return Cookies.set(refreshTokenKey, token)
}
