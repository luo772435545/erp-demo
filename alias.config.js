let resolve =(dir) => path.join(__dirname, dir)

module.exports = {
    resolve: {
        alias: {
            'vue$': resolve('vue/dist/vue.esm.js'),
            '#@': resolve('public'),
            '@': resolve('src'),
            '@v': resolve('src/views')
        }
    }
};
