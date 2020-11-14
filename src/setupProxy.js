const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://git.heroku.com/zimstore.git",
      changeOrigin: true,
    })
  );
};
