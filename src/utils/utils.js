//序列化
export const serialize = data => {
    let arrayList = []
    Object.keys(data).forEach(ele => {
        arrayList.push(`${ele}=${data[ele]}`)
    })
    return arrayList.join('&')
}

//判断是否为空
export function isNull(val) {
    if (typeof val == 'boolean') {
        return false
    }

    if (typeof val == 'number') {
        return false
    }

    //不判断object的原因是数组类型也会被检测为object
    if (val instanceof Array) {
        if (val.length === 0) {
            return true
        }
    } else if (val instanceof Object) {
        if (JSON.stringify(val) === "{}") {
            return true
        }
    } else {
        if (val == 'null' || val == null || val == 'undefined' || val == undefined || val == '') {
            return true
        }
    }
}

export function arrayToStr(val) {
    let str = '';
    for (let tableId of val) {
        str += tableId + ','
    }
    if (val.length > 0) {
        str = str.substr(0, str.length - 1);
    }
    return str
}
