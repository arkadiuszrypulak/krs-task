var gulp = require("gulp");
var less = require("gulp-less");
var path = require("path");

gulp.task("compile-less", function () {
  return gulp
    .src("./assets/less/**/*.less")
    .pipe(
      less({
        paths: [path.join(__dirname, "less", "includes")],
      })
    )
    .pipe(gulp.dest("./assets/css/"));
});

gulp.task("watch", function () {
  gulp.watch("./assets/less/*.less", gulp.series("compile-less"));
});
