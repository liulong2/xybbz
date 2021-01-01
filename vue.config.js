// vue.config.js
const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    devServer: {
        open: true,
        proxy: {
            '/api': {
                //  接口请求路径
                target: `http://localhost:1001/`,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}
