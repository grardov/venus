const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', () => {
  gulp.src('./scss/venus.scss')
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(autoprefixer({
        versions: ['last 2 browsers']
      }))
      .pipe(gulp.dest('./css'))
});

gulp.task('default', () => {
  gulp.watch('./scss/**/*.scss', ['sass']);
});