var gulp = require("gulp");
var rev = require("gulp-rev");
var revReplace = require("gulp-rev-replace");
var config = require("../config").rev;
var del = require('del');

gulp.task("rev", ["uglify", "minify:css"], function() {
    return gulp.src([config.js.app, config.js.vendor, config.styles.src], {base: config.src})
        .pipe(rev())
        .pipe(gulp.dest(config.dist))
        .pipe(rev.manifest())
        .pipe(gulp.dest(config.dist));
});


gulp.task("rev:replace", ["rev"], function() {
    var manifest = gulp.src("./" + config.dist + "/rev-manifest.json");

    return gulp.src(config.index)
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest(config.dist));
});

gulp.task("rev:assets", ["rev:replace"], function(callback) {
    return del([
        config.js.app,
        config.js.vendor,
        config.styles.src
    ], {force: true}, callback);
});
