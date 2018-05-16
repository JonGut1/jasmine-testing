var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');
/**
* Refreshes the page after save file
*/
browserSync.init({
     server: "dist/",
     browser: ["google chrome"]
});
/**
* converts the .scss files to css and stores,
* them in a new folder.
* also adds prefixes to certain commands, so that they,
* would work for other browsers and also for the last 2 versions.
*/
gulp.task('styles', function(done) {
	gulp.src('css/*.css')
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(gulp.dest('dist/css'))
	browserSync.reload();
	done()
});
/**
* Runs the default gulp command.
* it watches for the changes in .scss files, index.html and .js files.
*/
gulp.task('default', function(done) {
	gulp.watch('css/*.css', gulp.series('styles'))
	gulp.watch('index.html', gulp.series('copy-html'))
	gulp.watch('js/*.js', gulp.series('scripts'))
	gulp.watch('jasmine/spec/*.js', gulp.series('jasmine'))
	done()
});
/**
* Creates new .js files that are converted to ES 2015.
* also those files are saved in a different folder.
*/
gulp.task('scripts', function(done) {
	gulp.src('js/*.js')
	.pipe(gulp.dest('dist/js'))
	browserSync.reload();
	done()
});

gulp.task('jasmine', function(done) {
	gulp.src('jasmine/spec/*.js')
	.pipe(gulp.dest('dist/jasmine/spec'))
	browserSync.reload();
	done()
});
/**
* Copies the index.html file to a dist folder on save.
*/
gulp.task('copy-html', function(done) {
	gulp.src('index.html')
	.pipe(gulp.dest('dist'))
	browserSync.reload();
	done()
});

