const statsLogger = require("webpack-stats-logger").default;
const errorHandler = require("gulp-plumber-error-handler");
const webpack = require("webpack");

const scriptsErrorHandler = errorHandler("Error in 'scripts' task");

module.exports =
  (watch = false) =>
  callback => {
    const webpackConfig = require("../../webpack.config")(watch);

    return webpack(webpackConfig, (error, stats) => {
      const jsonStats = stats.toJson();
      if (jsonStats.errors.length) {
        jsonStats.errors.forEach(message => {
          scriptsErrorHandler.call({emit() {}}, {message});
        });
      }
      statsLogger(error, stats);

      if (watch === false) {
        callback();
      }
    });
  };
