import axios from '../../axios/axios'

export const getList = (obj) => {
    return axios({
        url: "/api/tables/name/list",
        method: 'get',
        params: {
            dataId: obj.dataId
        }
    })
}


export const deleteData = (ids) => {
    return axios({
        url: "/api/tables/name/delete",
        method: 'post',
        params: {
            ids
        }
    })
}

export const generatorTable = (ids) => {
    return axios({
        url: "/api/datasouce/data/generator",
        method: 'post',
        params: {
            ids
        }
    })
}