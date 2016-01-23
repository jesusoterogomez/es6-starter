var gulp = require('gulp');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var scripts = require('../config').scripts;

gulp.task('scripts', function() {
  return gulp.src(scripts.src)
    .pipe(concat(scripts.output))
    .pipe(babel({
        presets: ['babel-preset-es2015']
    }))
    .pipe(gulp.dest(scripts.dest));
});
