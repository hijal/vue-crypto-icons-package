const utils = require("./utils");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: true,
    extract: isProduction,
  }),
  transformToRequire: {
    video: "src",
    source: "src",
    img: "src",
    image: "xlink:href",
  },
};
