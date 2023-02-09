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
        pathPrefix: "/restructure-demo/",
        dir: {
            input: "src",
            output: "docs"
        }
    }
}