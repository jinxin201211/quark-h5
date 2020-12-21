module.exports = {
  port: 8061,
  mongodb: {
    // url: "mongodb://localhost:27017/quark",
    url: "mongodb://quark:888888@localhost:27017/quark",
    options: {}
  },
  middleware: ["handlerError"],
  jwt: { secret: "huangwei9527" },
  crypto: { secret: "#*#*huangwei9527*#*#" },
  baseUrl: ""
};
