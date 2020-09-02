module.exports = {
    '^/order-service': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        ws: false,
        onProxyRes: function (proxyRes, req, res) {
            proxyRes.headers['area'] = 'order-service';
        },
        pathRewrite: function (path, req, res) {
            let service = path.split('/')[1];
            path = path.replace(/^\/order-service/, '');
            if (path.indexOf('?') > -1) {
                path = path + '&' + service;
            } else {
                path = path + '?&' + service;
            }
            return path;
        }
    },
    '/': {
        target: "http://www.test.com",
        changeOrigin: true,
        ws: false,
        onProxyRes: function (proxyRes, req, res) {
            proxyRes.headers['area1'] = 'setting-service';
        },
        pathRewrite: function (path, req) {
            let service = path.split('&')[path.split('&').length - 1];
            return '/' + service + path.replace('&' + service, '').replace(/\?$/, '');
        }
    }
}