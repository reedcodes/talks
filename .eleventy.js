module.exports = function( eleventyConfig ) {

  // Send assets from source to site.
  eleventyConfig.addPassthroughCopy( {
    // FontAwesome webfont icons.
    "./node_modules/@fortawesome/fontawesome-free/webfonts/": "dist/webfonts/",

    // reveal.js slideshow functionality.
    "./node_modules/reveal.js/dist/reveal.js*": "dist/js/",
    "./node_modules/reveal.js/plugin/**/*": "dist/js/plugin/",

    // Local site assets.
    "./source/.htaccess": "",
    "./source/_images/": "dist/images/",

    // Talk-specific assets, slideshows begin with the year 20xx.
    "./source/20*/**/*.pdf": "",
    "./source/20*/**/images/**/*": "",
    "./source/20*/**/video/**/*": ""
  } );

  // 11ty config options.
  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "source",
      data: "_data",
      includes: "_includes",
      output: "site"
    }
  };
};
