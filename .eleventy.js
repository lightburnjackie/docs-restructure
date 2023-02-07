// const eleventyNavigation = require('@11ty/eleventy-navigation');
const util = require('util')
const testData = require('./src/_data/testData');
const quickrefs = require('./src/_data/quickrefs');

module.exports = function (eleventyConfig) {


    eleventyConfig.addFilter('dump', obj => {
        return util.inspect(obj)
    });

    eleventyConfig.addShortcode("test", function(arg) {
        return `${ testData[arg] }`
    });

    eleventyConfig.addShortcode("quickref", function(name) {
        return `Display name for ${name} is ${quickrefs[name].displayName}`
    })

    // eleventyConfig.addPlugin(eleventyNavigation);
    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src"
        }
    }
}