export default {
    token: 'liu', //token 请求头
    keyName: 'token',
    //全局头部和底部显示存储名称
    topBottomEnableName: 'isEnable',
    //顶部切换
    current: 'current',
    breadList: 'breadListStorage',
    //MyLove组件传入信息
    hrefs: [
        {
            iconHref: '#icon-youxi',
            iconName: '游戏',
            routerPath: '/game'
        },
        {
            iconHref: '#icon-dianying',
            iconName: '电影'
        },
        {
            iconHref: '#icon-dongman',
            iconName: '动漫'
        },
        {
            iconHref: '#icon-manhua',
            iconName: '漫画'
        },
        {
            iconHref: '#icon-dianshiju',
            iconName: '电视剧'
        },
        {
            iconHref: '#icon-xuexi',
            iconName: '学习',
            routerPath: '/learn'
        }
    ]
}
