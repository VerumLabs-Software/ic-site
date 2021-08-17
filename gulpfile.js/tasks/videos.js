const gulp = require("gulp");
const plumber = require("gulp-plumber");
const errorHandler = require("gulp-plumber-error-handler");
const changed = require("gulp-changed");

module.exports = () => {
  return gulp
    .src("app/static/videos/**/*")
    .pipe(plumber({errorHandler: errorHandler("Error in videos task")}))
    .pipe(changed("dist/assets/videos"))
    .pipe(gulp.dest("dist/assets/videos"));
};
