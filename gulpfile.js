var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", () => {

    return gulp.src("./sass/*.scss")
      .pipe(sass({outputStyle:"compressed"}))
      .pipe(gulp.dest("./css"))
});

gulp.task("watch", () => {
    gulp.watch("./sass/*.scss", gulp.series(["sass"]));
})

gulp.task("default" , gulp.series(["sass","watch"]));
