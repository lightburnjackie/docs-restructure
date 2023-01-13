const eleventyNavigation = require('@11ty/eleventy-navigation');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPlugin(eleventyNavigation);
    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src"
        }
    }
}