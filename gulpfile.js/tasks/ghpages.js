const gulp = require("gulp");
const ghpages = require("gulp-gh-pages");

module.exports = () => {
  return gulp.src("dist/**/*").pipe(ghpages());
};
