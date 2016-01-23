var gulp = require('gulp');
var nano = require('gulp-cssnano');
var config = require('../config').build;
var rename = require('gulp-rename');
var del = require('del');

// @see: https://github.com/ai/browserslist
var browsers = [
    "> 2%",
    "Last 2 versions"
];

var options = {
    discardComments: {removeAll: true},
    autoprefixer: {browsers: browsers}
};

var filename = 'main.min.css';

gulp.task('cssnano', ['styles:prod'], function() {
    return gulp.src(config.css + '/*.css')
        .pipe(nano(options))
        .pipe(rename(filename))
        .pipe(gulp.dest(config.css));
});

gulp.task('cssnano:clean', ['cssnano'], function(callback) {
    return del([
        config.css + '/main.css'
    ], {force: true}, callback);
});

gulp.task('cssnano:min', ['cssnano:clean'], function() {
    return gulp.src(config.css + '/' + filename)
        .pipe(rename('main.css'))
        .pipe(gulp.dest(config.css));
});

gulp.task('minify:css', ['cssnano:min'], function(callback) {
    return del([
        config.css + '/' + filename
    ], {force: true}, callback);
});
