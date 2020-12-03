
//序列化
export const serialize = data => {
    let arrayList = []
    Object.keys(data).forEach(ele =>{
        arrayList.push(`${ele}=${data[ele]}`)
    })
    return arrayList.join('&')
}
