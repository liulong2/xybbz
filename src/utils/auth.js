import Cookies from 'js-cookie'
const Tokenkey = 'liu'
//获得token
export function getToken(){
    return Cookies.get(Tokenkey);
}
