var gulp = require('gulp');
var sync = require('browser-sync');
var config = require('../config').sync;

// Run Static Server with BrowserSync
gulp.task('serve', ['build', 'watch'], function() {
    sync.init(config);
});
