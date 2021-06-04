'use strict';

// Define libraries.
const gulp   = require( 'gulp' ),
      sass   = require( 'gulp-dart-sass' ),
      html   = require( 'gulp-html-partial' );



// Define HTML source and distribution directories.
const htmlSrc      = './src/html/**/*.html';
const htmlAssetSrc = [
  './src/html/.htaccess',
  './src/html/**/*.md',
  './src/html/**/*.png',
  './src/html/**/*.jpg',
  './src/html/**/*.gif',
  './src/html/**/*.pdf',
  './src/html/**/*.mp4'
];
const htmlDist     = './';

// Task to compile HTML files.
gulp.task( 'html', function () {
  const htmlBuild = gulp.src( htmlSrc )
    .pipe( html( {
      basePath: './src/partials/',
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
const faDist = './dist/webfonts';

const assetBase = './src';
const assetSrc  = [
  './src/images/**/*'
];
const assetDist = './dist';

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
const cssSrc  = './src/sass/**/*.scss';
const cssDist = './dist/css';

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
const revealJsDist     = './dist/js';

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
