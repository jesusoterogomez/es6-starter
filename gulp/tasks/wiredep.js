var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var config = require('../config').wiredep;
var usemin = require('gulp-usemin');

gulp.task('wiredep', function() {
    gulp.src(config.src)
        .pipe(wiredep({}))
        .pipe(usemin({}))
        .pipe(gulp.dest(config.dest));
});
