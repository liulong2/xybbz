const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const name = "xybbz"
module.exports = {
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                // eslint-disable-next-line no-undef
                '@': resolve('src')
                // '@crud': resolve('src/components/Crud')
            }
        }
    }
}


