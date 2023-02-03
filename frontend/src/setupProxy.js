const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/oauth2',
    createProxyMiddleware({
      target:  "https://i8a803.p.ssafy.io",
      changeOrigin: true,
    })
  );
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://i8a803.p.ssafy.io',
      changeOrigin: true,
    })
  );

  // app.use(
  //   '/chat',
  //   createProxyMiddleware({
  //     target: 'http://i8a803.p.ssafy.io:8005',
  //     changeOrigin: true,
  //   })
  // );
};
