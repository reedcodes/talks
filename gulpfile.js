'use strict';

// Define libraries.
const gulp   = require( 'gulp' ),
      sass   = require( 'gulp-sass' )( require( 'sass' ) );

// Define CSS source and distribution directories.
const cssSrc  = './source/_sass/**/*.scss';
const cssDist = './site/dist/css';

// Define CSS source paths from other locations, e.g. node modules.
const cssIncludePaths = [
  './node_modules/@fortawesome/fontawesome-free/scss',
  './node_modules/include-media/dist',
  './node_modules/reveal.js/css'
];

// Task to compile CSS files.
gulp.task( 'sass', function() {
  return gulp.src( cssSrc )
    .pipe( sass( {
      outputStyle: 'compressed',
      includePaths: cssIncludePaths
    } ) )
    .pipe( gulp.dest( cssDist ) );
});

// Gulp tasks.
gulp.task( 'default', gulp.series( 'sass' ) );
