//存储本的意义在于先找本地的数据,速度快?
import global from "@/config/global";
import {isNull} from "@/utils/utils";

const localName = global.token + '-'
//将token 存储在本地
export const setLocalToken = (tokenObj = {}) => {
    let {keyName, context, type} = tokenObj
    keyName = localName + keyName
    //將数据类型,添加时间,类型(true, false),数据内容放在本地存储(临时,永久)
    let object = {
        contextType: typeof (context),
        context: context,
        type: type,
        datetime: new Date().getTime()
    }
    if (type) {
        window.localStorage.setItem(keyName, JSON.stringify(object))
    } else {
        window.sessionStorage.setItem(keyName, JSON.stringify(object))
    }

}

//获取本地存储
export const getLocalToken = (params = {}) => {
    let {name, typeBug} = params
    name = localName + name
    let obj = {},
        context;
    obj = window.localStorage.getItem(name)
    if (isNull(obj)) {
        obj = window.sessionStorage.getItem(name)
    }
    if (isNull(obj)) {
        return
    }
    try {
        obj = JSON.parse(obj)
    } catch {
        return obj
    }
    if (typeBug) {
        return obj
    }
    if (obj.dataType == 'string') {
        context = obj.context
    } else if (obj.dataType == 'object') {
        context = obj.context
    }
    return context;
}
