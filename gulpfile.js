const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const minify = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
 
module.exports.uglify = function () {
  return gulp.src('src/js/*')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
};

module.exports.imagemin = function () {
  return gulp.src('src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/images'))
};

module.exports.imagemin = function () {
  return gulp.src('src/icons/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/icons'))
};


module.exports.html = function () {
  return gulp
    .src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
};

module.exports.sass = function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minify())
    .pipe(gulp.dest('dist'));
};

module.exports.default = function(callback) {
  callback();
};

module.exports.watch = function() {
    livereload.listen();
    gulp.watch('src/*.html', gulp.series(['html']));
    gulp.watch('src/scss/*.scss', gulp.series(['sass']));
};