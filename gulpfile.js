'use strict';

// Define libraries.
const gulp   = require( 'gulp' ),
      babel  = require( 'gulp-babel' ),
      concat = require( 'gulp-concat' ),
      sass   = require( 'gulp-dart-sass' ),
      html   = require( 'gulp-html-partial' );



// Define HTML source and distribution directories.
const htmlSrc      = './src/html/**/*.html';
const htmlAssetSrc = './src/html/**/images/*'
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
  const faBuild = gulp.src( faSrc )
    .pipe( gulp.dest( faDist ) );
  
  const assetBuild = gulp.src( assetSrc, { base: assetBase } )
    .pipe( gulp.dest( assetDist ) );
  
  return faBuild, assetBuild;
});



// Define CSS source and distribution directories.
const cssSrc  = './src/sass/screen.scss';
const cssDist = './dist/css';

// Task to compile CSS files.
gulp.task( 'sass', function() {
  const cssBuild = gulp.src( cssSrc )
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe( gulp.dest( cssDist ) );
  return cssBuild;
});



// reveal.js slideshow functionality.
// Define CSS and JS source and distribution directories.
const revealCssSrc  = './src/sass/reveal/*.scss';
const revealCssDist = './dist/css';

const revealJsSrc = [
  './node_modules/reveal.js/dist/reveal.js',
  // './node_modules/reveal.js/plugin/notes/**/*.*'
];
const revealJsBase = './node_modules/reveal.js';
const revealJsDist = './dist/js/reveal';

// Task to compile reveal.js files.
gulp.task( 'reveal', function() {
  const revealCss = gulp.src( revealCssSrc )
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe( gulp.dest( revealCssDist ) );

  const revealJs = gulp.src( revealJsSrc, { base: revealJsBase } )
    .pipe( babel( { presets: [
      [ 'minify', { builtIns: false } ]
    ] } ) )
    .pipe( concat( 'reveal.min.js' ) )
    .pipe( gulp.dest( revealJsDist ) );

  return revealCss, revealJs;
});



// Gulp tasks.
gulp.task( 'default', gulp.series( 'html', 'assets', 'sass', 'reveal' ) );
