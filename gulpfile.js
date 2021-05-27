'use strict';

// Define libraries.
const gulp   = require( 'gulp' ),
      babel  = require( 'gulp-babel' ),
      concat = require( 'gulp-concat' ),
      sass   = require( 'gulp-dart-sass' ),
      html   = require( 'gulp-html-partial' );



// Define HTML source and distribution directories.
const htmlSrc  = './src/html/**/*.html';
const htmlDist = './';

// Task to compile HTML files.
gulp.task( 'html', function () {
  const htmlBuild = gulp.src( htmlSrc )
    .pipe( html( {
      basePath: './src/partials/',
      tagName: 'partial',
      variablePrefix: '@@'
    } ) )
    .pipe( gulp.dest( htmlDist ) );
  return htmlBuild;
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
const revealCssSrc  = [
  './node_modules/reveal.js/css/reveal.scss',
  './src/sass/reveal.scss'
];
const revealCssDist = './dist/css';

const revealJsSrc = './node_modules/reveal.js/dist/reveal.js';
const revealJsDist = './dist/js';

// Task to compile reveal.js files.
gulp.task( 'reveal', function() {
  const revealCss = gulp.src( revealCssSrc )
    .pipe( sass( { outputStyle: 'compressed' } ) )
    .pipe( concat( 'reveal.min.css' ) )
    .pipe( gulp.dest( revealCssDist ) );

  const revealJs = gulp.src( revealJsSrc )
    .pipe( babel( { presets: [
      [ 'minify', { builtIns: false } ]
    ] } ) )
    .pipe( concat( 'reveal.min.js' ) )
    .pipe( gulp.dest( revealJsDist ) );

  return revealCss, revealJs;
});



// Gulp tasks.
gulp.task( 'default', gulp.series( 'html', 'sass', 'reveal' ) );
