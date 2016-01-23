var gulp = require('gulp');

gulp.task('build', ['wiredep', 'html', 'styles', 'scripts', 'images']);

gulp.task('build:prod', ['wiredep', 'images', 'html',
    'uglify', 'minify:css', "rev:assets"], function() {
        console.log("Build Successful");
        process.exit(0);
    });
