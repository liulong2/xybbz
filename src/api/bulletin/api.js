import axios from '../../axios/axios'

export const getLatest = () => {
    return axios({
        url: "/api/bulletin/get/latest",
        method: 'get',
        params: {}
    })
}