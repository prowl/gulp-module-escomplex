'use strict';

var complexity = require('gulp-escomplex');
var reporter = require('gulp-escomplex-reporter-json');
var path = require('path');

// references to our setup parameters
var config = null;
var gulp = null;
var outputDir = null;

/**
 * Sets up the escomplex task and attaches it to the gulp instance
 *
 * @param {Object} gulpRef The gulp instance we're attaching the task to
 * @param {Object} conf The configuration object
 */
function esComplexSetup(gulpRef, conf) {
  // assign our parameters to the local variables
  gulp = gulpRef;
  config = conf;

  // determine the output directory
  outputDir = path.resolve(conf.root, 'docs/esComplex');

  // run the task
  gulp.task('escomplex', false, esComplexTask);
}

/**
 * Runs the escomplex report and outputs its results as json
 */
function esComplexTask() {
  return gulp.src(config.src, {base: config.root})
    .pipe(complexity())
    .pipe(reporter())
    .pipe(gulp.dest(outputDir));
}

module.exports = esComplexSetup;
