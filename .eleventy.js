// const eleventyNavigation = require('@11ty/eleventy-navigation');
const util = require('util');
// const quickrefs = require('./src/_data/quickrefs');
// const markdownIt = require("markdown-it");
const qrShortcode = require('./src/_includes/quickrefShortcode');

module.exports = function (eleventyConfig) {

    // eleventyConfig.setLibrary("md", markdownIt({html: true}));
    
    eleventyConfig.addFilter('dump', obj => {
        return util.inspect(obj)
    });


    eleventyConfig.addShortcode("quickref", qrShortcode);

    // eleventyConfig.addPlugin(eleventyNavigation);
    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src"
        }
    }
}