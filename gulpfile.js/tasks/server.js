const browserSync = require("browser-sync").create();

module.exports = () => {
  browserSync.init({
    open: true,
    reloadOnRestart: true,
    reloadDebounce: 100,
    port: 3000,
    snippetOptions: {
      rules: {
        match: /<\/body>/i,
      },
    },
    server: {
      baseDir: ["./dist"],
    },
    directory: false,
    // middleware: [debuga()],
  });

  browserSync.watch("dist/**/*").on("change", browserSync.reload);
};
