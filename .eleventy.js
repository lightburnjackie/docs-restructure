const util = require('util');

const qrShortcode = require('./src/_includes/quickrefShortcode');

module.exports = function (eleventyConfig) {
    
    eleventyConfig.addFilter('dump', obj => {
        return util.inspect(obj)
    });
    eleventyConfig.addShortcode("quickref", qrShortcode);
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