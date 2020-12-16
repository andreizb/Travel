/* eslint-disable no-undef */
const HtmlPlugins = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = { entry: "./src/main.js",
                   plugins: [
                     new HtmlPlugins({ template: "./index.html" }),
                     new CopyPlugin({ patterns: [{ from: "styles", to: "styles" }] })
                   ] };
