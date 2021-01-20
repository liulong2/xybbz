import axios from '@/axios/axios'

export const getSort = (val) => {
    return axios({
        url: '/api/sort/data',
        method: "get",
        isToken: false,
        params: {
            sortName: val.name,
            sortType: val.type
        }
    })
}