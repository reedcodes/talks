'use strict';

// Require the packages used in this gulpfile.
const cleanCSS = require( 'gulp-clean-css' ),
      gulp = require( 'gulp' ),
      sass = require( 'gulp-sass' )( require( 'sass' ) ),
      sourcemaps = require( 'gulp-sourcemaps' );

// Define CSS source and distribution directories. These can change based on
// your own directory structure. Keep in mind that gh-pages requires its site
// content to be stored in the `/site/` directory.
const cssSource = './source/_sass/**/*.scss';
const cssBuild = './site/assets/css';

// Define CSS source paths from other locations, e.g. node modules. They can
// then be `@use`d in Sass files without having to specify the entire path.
const cssIncludePaths = [
  './node_modules/@fortawesome/fontawesome-free/scss',
  './node_modules/include-media/dist',
  './node_modules/reveal.js/css',
  './node_modules/reveal.js/plugin'
];

// Task to compile CSS files. These tasks take the code from the source files,
// compiles it, and sends them to the directory for built files.
gulp.task( 'sass', function() {
  return gulp.src( cssSource )
    .pipe( sourcemaps.init() )
    .pipe( sass({ includePaths: cssIncludePaths }) )
    .pipe( cleanCSS( { level: 2 } ) )
    .pipe( sourcemaps.write() )
    .pipe( gulp.dest( cssBuild ) );
});

// Gulp tasks.
gulp.task( 'default', gulp.series( 'sass' ) );
