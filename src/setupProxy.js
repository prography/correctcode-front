const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://api.correctcode.dev',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/',
      },
    }),
  );
};
