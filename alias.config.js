let resolve =(dir) => path.join(__dirname, dir)

module.exports = {
    resolve: {
        alias: {
            'vue$': resolve('vue/dist/vue.esm.js'),
            '#@': resolve('public'),
            '@': resolve('src'),
            '@s': resolve('setting'),
            '@v': resolve('src/views')
        }
    }
};
