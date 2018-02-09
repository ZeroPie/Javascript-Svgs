var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('default', function() {
    return gulp.src('src/icons/index.js')
    .pipe(webpack({
        output:{
            filename: 'jsSvgs.js',
        }
    }))
    .pipe(gulp.dest('dist/'));
});
