var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src('src/styles/styles.scss')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer())
    .pipe(sourcemaps.write('./src/css/maps'))
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('default',function() {
  gulp.watch('src/styles/**/*.scss',['styles']);
});