const gulp = require("gulp");

module.exports = () => {
  global.isWatching = true;

  gulp.watch("app/static/icons/**/*", gulp.series("icons"));
  gulp.watch("app/static/images/**/*", gulp.series("images", "webp"));
  gulp.watch("app/static/videos/**/*", gulp.series("videos"));
  gulp.watch("app/static/misc/**/*", gulp.series("copy"));
  gulp.watch("app/scripts/**/*.js", gulp.series("copymain"));
  gulp.watch(
    "app/{pages,blocks,components,layouts}/**/*.pug",
    gulp.series("templates"),
  );
  gulp.watch(
    "app/{styles,blocks,components,pages}/**/*.scss",
    gulp.series("styles"),
  );
  gulp.watch("app/data/**/*.json", gulp.series("templates"));
};
