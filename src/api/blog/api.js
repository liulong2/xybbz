import axios from '../../axios/axios'

export const getBlogListPage = (blogSortId,pageNumber,pageSize) =>{
    return axios({
        url: '/api/blog/page',
        method: 'get',
        isToken: false,
        params: {
            blogSortId,
            pageNumber,
            pageSize,
        }
    })
}