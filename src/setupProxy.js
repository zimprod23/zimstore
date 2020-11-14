const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target:
        "https://5fb02a111db4d78ab7563b72--admiring-villani-192526.netlify.app/",
      changeOrigin: true,
    })
  );
};
