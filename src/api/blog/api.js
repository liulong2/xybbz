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

export const getBlogPageType = (sortName,pageNumber,pageSize) => {
    return axios({
        url: '/api/blog/sort/list/page',
        method: 'get',
        isToken: false,
        params: {
            sortName,
            pageNumber,
            pageSize
        }
    })
}

export const getBlogDetailed = (id) =>{
    return axios({
        url: '/api/blog/detailed',
        method: 'get',
        isToken: false,
        params: {
            id
        }
    })
}