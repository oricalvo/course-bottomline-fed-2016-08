var gulp = require("gulp");
var shelljs = require("shelljs");

gulp.task("dev", ["compile-ts"], function() {
});

gulp.task("compile-ts", ["restore-typings"], function() {
    shelljs.exec("tsc");
});

gulp.task("restore-typings", function() {
    shelljs.exec("typings install");
});

gulp.task("restore-lib", function() {
    return gulp.src("bower_components/**/angular*.js").pipe(gulp.dest("lib"));
});

