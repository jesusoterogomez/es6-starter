var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync');
var config = require('../config.js').styles;

function log(e) {
    // Logs Compilation errors to console
    console.log(e.toString());
    this.emit('end'); // stops execution
}

gulp.task('styles', function() {
    return gulp.src(config.src)
        .pipe(sass(config.settings))
        .on('error', log)
        .pipe(gulp.dest(config.dest))
        .pipe(sync.stream());
});

gulp.task('styles:prod', function() {
    return gulp.src(config.src)
        .pipe(sass(config.settings))
        .on('error', log)
        .pipe(gulp.dest(config.dest))
});
