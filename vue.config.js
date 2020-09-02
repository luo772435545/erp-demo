const path = require('path');
const proxyFile = require(resolve('setting/proxy/index'));
/*const CompressionPlugin = require('compression-webpack-plugin')*/
function resolve (dir) {
    return path.join(__dirname, dir);
}







const erp = {
    ebay: { // 订单系统-ebay订单
        entry: 'src/views/ebay/ebay.js',
        template: 'src/views/ebay/ebay.html'
    }
};


module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            /*return {
              plugins: [
                new CompressionPlugin({
                                        test: /\.js$|\.html$|\.css/,
                                        threshold: 10240,
                                        deleteOriginalAssets: false
                                      })
              ]
            }*/
        } else {
            // 为开发环境修改配置...
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('#@', resolve('public'))
            .set('@', resolve('src'))
            .set('@s', resolve('setting'));
        config.resolve.extensions
            .add('.css');
        config.plugins.delete('prefetch')
        if (process.env.NODE_ENV === 'production') {
            config.optimization.minimize(true);
            // 分割代码
            config
                .when(process.env.NODE_ENV !== 'development',
                    config => {
                        config
                            .optimization.splitChunks({
                            chunks: 'all',
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // only package third parties that are initially dependent
                                },
                                elementUI: {
                                    name: 'chunk-iview',
                                    priority: 20, //
                                    test: /[\\/]node_modules[\\/]_?view-design(.*)/ // in order to adapt to cnpm
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: resolve('src/components'), // can customize your rules
                                    minChunks: 3, //  minimum common number
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        })
                        // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
                        config.optimization.runtimeChunk('single')
                    }
                )
            if (process.env.npm_config_report) {
                config
                    .plugin('webpack-bundle-analyzer')
                    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    lintOnSave: process.env.NODE_ENV !== 'production',
    /*productionSourceMap: false,*/
    css: {
        extract: false
    },
    devServer: {
        open: true,
        overlay: {
            warnings: false,
            errors: false
        },
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: true,
        proxy: proxyFile // string | Object
    },
    pages: Object.assign(erp)
};
