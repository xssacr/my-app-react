const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:8888',
    changeOrigin: true
  }))

  app.use('/apilist', createProxyMiddleware({
    target: 'http://localhost:8888',
    changeOrigin: true,
    pathRewrite: {
      '^/apilist': ''
    }
  }))
}