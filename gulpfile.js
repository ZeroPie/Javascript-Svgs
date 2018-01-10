var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('default', function() {
    return gulp.src('src/index.js')
    .pipe(webpack({
        output:{
            filename: 'fap.js',
        }
    }))
    .pipe(gulp.dest('dist/'));
});
