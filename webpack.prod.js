/* eslint-disable no-undef */
const { merge } = require("webpack-merge");
const Config = require("./webpack.config.js");

module.exports = merge(Config, {
    mode: "production"
});
