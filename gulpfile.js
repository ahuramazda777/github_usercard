const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const htmlmin = require('gulp-htmlmin')
//compile scss into css


gulp.task('watch', gulp.series(function () {
    browserSync.init({
       
        injectChanges: true,
        server: {
            baseDir: "./docs"
        }
    });
    var html = gulp.watch('docs/index.html');
    html.on('change', function (path, stats) {
        console.log('you changed the html');
        browserSync.notify("Compiling, please wait!");
        browserSync.reload("index.html");
    })
    var js = gulp.watch('docs/js/*.js');
    js.on('change', function (path, stats) {
        console.log('you changed the js');
        browserSync.notify("Compiling, please wait!");
        browserSync.reload();
    })
    var css = gulp.watch('docs/css/*.css');
    css.on('change', function (path, stats) {
        console.log('you changed the css');
        browserSync.notify("Injecting CSS!");
        browserSync.reload("*.css");
    })
}));

