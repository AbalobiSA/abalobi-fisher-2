let gulp = require("gulp");
const bump = require('gulp-bump');


gulp.task("default", () => {
    return gulp.src('./package.json')
        .pipe(bump())
        .pipe(gulp.dest("./"));
});