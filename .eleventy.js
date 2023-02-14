const util = require('util');

const qrShortcode = require('./src/_includes/shortcodes/quickrefShortcode');
const sizeShortcode = require('./src/_includes/shortcodes/sizeIndicator');

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/content/img');
    
    eleventyConfig.addFilter('dump', obj => {
        return util.inspect(obj)
    });
    eleventyConfig.addShortcode("quickref", qrShortcode);
    eleventyConfig.addShortcode("sizeIndicator", sizeShortcode);
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