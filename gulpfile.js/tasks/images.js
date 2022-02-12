const gulp = require("gulp");
const plumber = require("gulp-plumber");
const errorHandler = require("gulp-plumber-error-handler");
const imagemin = require("gulp-imagemin");
const webp = require("imagemin-webp");
const extReplace = require("gulp-ext-replace");
const changed = require("gulp-changed");

exports.images = () => {
  return gulp
    .src("app/static/images/**/*")
    .pipe(plumber({errorHandler: errorHandler("Error in images task")}))
    .pipe(changed("dist/assets/images"))
    .pipe(
      imagemin(
        [
          imagemin.svgo({
            plugins: [
              {
                removeViewBox: false,
              },
            ],
          }),
        ],
        {verbose: true},
      ),
    )
    .pipe(gulp.dest("dist/assets/images"));
};

exports.webp = () => {
  return gulp
    .src(`app/static/images/**/*.{jpg,png}`)
    .pipe(plumber({errorHandler: "Error in webp task"}))
    .pipe(imagemin([webp()]))
    .pipe(extReplace(".webp"))
    .pipe(gulp.dest("dist/assets/images"));
};
