var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('watch', function() {
    gulp.watch(config.html.src, config.html.tasks);
    gulp.watch(config.styles.src, config.styles.tasks);
});
