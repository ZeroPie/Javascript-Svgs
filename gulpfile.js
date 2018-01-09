var gulp = require('gulp');
var webpack = require('gulp-webpack');


gulp.task('default', function() {
  return gulp.src('src/entry.js')
    .pipe(webpack({
      output:{
        filename: 'famine.js',
      }
    }))
    .pipe(gulp.dest('dist/'));
});