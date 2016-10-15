var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	watch = require('gulp-watch'),
	connect = require('gulp-connect'),
	livereload = require('gulp-livereload'),
	rigger = require('gulp-rigger'),
    path = require('path'),
    less = require('gulp-less');


gulp.task('connect', function() {
  connect.server({
    root: 'bild',
    livereload: true
  });
});


gulp.task('html', function () {
	return gulp.src('index.html')
	.pipe(rigger())
    .pipe(gulp.dest('temp/'))
    .pipe(livereload())
    .pipe(connect.reload());
});

gulp.task('less', function () {
  return gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});

gulp.task('css', function() {
return gulp.src('css/*.css')
    .pipe(concatCss("style.css"))
    .pipe(concatCss("device.css"))
    .pipe(gulp.dest('temp/css'))
    .pipe(livereload())
    .pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('css/*.css', ['css'])
    gulp.watch('less/*.less', ['less']);
	gulp.watch('index.html', ['html']);

});

gulp.task('default', ['connect','html','css', 'less', 'watch'])