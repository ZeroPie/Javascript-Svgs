var gulp = require('gulp');
var webpack = require('gulp-webpack');
var spawn = require('child_process').spawn;


gulp.task('default', function() {
    spawn('node', ['src/icons/src/generateLibrary.js'], { stdio: 'inherit' });
    return gulp.src('src/icons/index.js')
        .pipe(webpack({
            output:{
                filename: 'javascriptSvgs.js',
            }
        }))
        .pipe(gulp.dest('dist/'));
});
