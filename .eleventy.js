const util = require('util');
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const qrShortcode = require('./src/_includes/shortcodes/quickrefShortcode');
const sizeShortcode = require('./src/_includes/shortcodes/sizeIndicator');
const imgShortcode = require('./src/_includes/shortcodes/insertImg');


module.exports = function (eleventyConfig) {

    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addPassthroughCopy('src/IMG');
    
    eleventyConfig.addFilter('dump', obj => {
        return util.inspect(obj)
    });
    eleventyConfig.addShortcode("quickref", qrShortcode);
    eleventyConfig.addShortcode("sizeIndicator", sizeShortcode);
    eleventyConfig.addShortcode("insertImg", imgShortcode);
    eleventyConfig.setServerOptions({
        showAllHosts: true
    })

    return {
        markdownTemplateEngine: "njk",
        pathPrefix: "/docs-restructure/",
        dir: {
            input: "src",
            output: "_site"
        }
    }
}