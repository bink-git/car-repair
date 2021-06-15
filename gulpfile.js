const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

const livereload = require('gulp-livereload');



module.exports.html = function () {
  return gulp
    .src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
};

module.exports.sass = function () {
  return gulp
    .src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'));
};

module.exports.default = function(callback) {
  callback();
};

module.exports.watch = function() {
    livereload.listen();
    gulp.watch('src/*.html', gulp.series(['html']));
    gulp.watch('src/scss/*.scss', gulp.series(['sass']));
};