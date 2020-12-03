module.exports = {
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
                // '@crud': resolve('src/components/Crud')
            }
        }
    },
}
