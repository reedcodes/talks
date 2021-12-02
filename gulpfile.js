'use strict';

// Define libraries.
const gulp   = require( 'gulp' ),
      sass   = require( 'gulp-sass' )( require( 'sass' ) ),
      html   = require( 'gulp-html-partial' );



// Define HTML source and distribution directories.
const htmlSrc      = './source/html/**/*.html';
const htmlAssetSrc = [
  './source/html/.htaccess',
  './source/html/**/*.md',
  './source/html/**/*.png',
  './source/html/**/*.jpg',
  './source/html/**/*.gif',
  './source/html/**/*.pdf',
  './source/html/**/*.mp4'
];
const htmlDist     = './site';

// Task to compile HTML files.
gulp.task( 'html', function () {
  const htmlBuild = gulp.src( htmlSrc )
    .pipe( html( {
      basePath: './source/partials/',
      tagName: 'partial',
      variablePrefix: '@@'
    } ) )
    .pipe( gulp.dest( htmlDist ) );

  const htmlAssets = gulp.src( htmlAssetSrc )
    .pipe( gulp.dest( htmlDist ) );

  return htmlBuild, htmlAssets;
});



// Define other static assets source and distribution directories.
const faSrc  = './node_modules/@fortawesome/fontawesome-free/webfonts/**/*';
const faDist = './site/dist/webfonts';

const assetBase = './source';
const assetSrc  = [
  './source/images/**/*'
];
const assetDist = './site/dist';

// Task to copy assets.
gulp.task( 'assets', function() {
  const faBuild = gulp.src( faSrc ).pipe( gulp.dest( faDist ) );

  const assetBuild = gulp.src(
    assetSrc,
    { base: assetBase }
  ).pipe( gulp.dest( assetDist ) );

  return faBuild, assetBuild;
});



// Define CSS source and distribution directories.
const cssSrc  = './source/sass/**/*.scss';
const cssDist = './site/dist/css';

// Task to compile CSS files.
gulp.task( 'sass', function() {
  const cssBuild = gulp.src( cssSrc )
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe( gulp.dest( cssDist ) );
  return cssBuild;
});



// reveal.js slideshow functionality.
// Define JS source and distribution directories.
const revealJsSrc      = './node_modules/reveal.js/dist/reveal.js*';
const revealJsPlugSrc  = './node_modules/reveal.js/plugin/**/*';
const revealJsPlugBase = './node_modules/reveal.js/plugin';
const revealJsDist     = './site/dist/js';

// Task to compile reveal.js files.
gulp.task( 'reveal', function() {
  // Minify the basic reveal.js script.
  const revealJs = gulp.src( revealJsSrc )
    .pipe( gulp.dest( revealJsDist ) );

  // Copy the plugin folders to the js directory.
  const revealJsPlugin = gulp.src(
    revealJsPlugSrc,
    { base: revealJsPlugBase }
  ).pipe( gulp.dest( revealJsDist ) );

  return revealJs, revealJsPlugin;
});



// Gulp tasks.
gulp.task( 'default', gulp.series( 'html', 'assets', 'sass', 'reveal' ) );
