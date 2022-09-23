// Import the 11ty navigation plugin. This requires Nunjucks.
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// Import metagen plugin. This allows for easy includes for website meta
// information, such as js and css assets, OpenGraph, and more.
const eleventyMetagenPlugin = require("eleventy-plugin-metagen");

// Import the favicon plugin.
const eleventyFaviconsPlugin = require("eleventy-plugin-gen-favicons");

module.exports = function( eleventyConfig ) {

  /*
   * Pass through copy.
   * This function sends assets from the source directory to the generated
   * output build. This can include files such as images or dependencies.
   * The input is relative to your project root, and the output is relative
   * to the generated site root, i.e. the `output` attribute that is defined
   * below, in the 11ty configuration options.
   * More info: https://www.11ty.dev/docs/copy/
   */
  eleventyConfig.addPassthroughCopy( {
    // Copy the reveal.js slideshow functionality to the /dist/ build folder.
    // Also copy over any included plugins.
    "./node_modules/reveal.js/dist/reveal.js*": "dist/js/",
    "./node_modules/reveal.js/plugin/": "dist/js/plugin/",

    // Copy over local site assets. This is usually images used globally across
    // the entire site, e.g. logos or profile photos.
    "./source/_images/": "dist/images/",

    // Copy over any webfonts used in slides. Public Sans is the default
    // typeface. https://github.com/uswds/public-sans
    "./source/_webfonts/": "dist/webfonts/"
  } );

  // Add the 11ty navigation plugin.
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Add the metagen plugin.
  eleventyConfig.addPlugin(eleventyMetagenPlugin);

  // Add the favicon plugin.
  eleventyConfig.addPlugin(eleventyFaviconsPlugin, {
    "outputDir": "./site"
  });

  // Add the image shortcode, from the 11ty image plugin.
  eleventyConfig.addAsyncShortcode( "image", require("./source/_config/shortcodes/image.js") );

  // Add presentation shortcodes.
  eleventyConfig.addPairedShortcode( "slide", require("./source/_config/shortcodes/slide.js") );
  eleventyConfig.addPairedShortcode( "notes", require("./source/_config/shortcodes/notes.js") );
  eleventyConfig.addPairedShortcode( "codeblock", require("./source/_config/shortcodes/code-block.js") );

  // Configuration.
  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: 'source',
      data: '_data',
      includes: '_includes',
      output: 'site'
    }
  };
};
