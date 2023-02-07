// const eleventyNavigation = require('@11ty/eleventy-navigation');
const util = require('util')

module.exports = function (eleventyConfig) {


    eleventyConfig.addFilter('dump', obj => {
        return util.inspect(obj)
    });

    eleventyConfig.addShortcode("test", function() {
        return `url: ${this.page.url}`
    });

    // eleventyConfig.addPlugin(eleventyNavigation);
    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src"
        }
    }
}