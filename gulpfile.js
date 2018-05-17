var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
/**
* Refreshes the page after save file
*/
browserSync.init({
     server: "dist/",
     browser: ["google chrome"]
});
/**
* saves css files to dist/css folder.
* also adds prefixes to certain commands, so that they,
* would work for other browsers and also for the last 2 versions.
*/
gulp.task('styles', function(done) {
	gulp.src('src/css/*.css')
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(gulp.dest('dist/css'))
	browserSync.reload();
	done()
});
/**
* Runs the default gulp command.
* it watches for the changes in .css files, index.html and .js files.
*/
gulp.task('default', function(done) {
	gulp.watch('src/css/*.css', gulp.series('styles'))
	gulp.watch('src/index.html', gulp.series('copy-html'))
	gulp.watch('src/js/*.js', gulp.series('scripts'))
	gulp.watch('src/jasmine/spec/*.js', gulp.series('jasmine'))
	done()
});
/**
* Saves .js files to the dist folder.
*/
gulp.task('scripts', function(done) {
	gulp.src('src/js/*.js')
	.pipe(gulp.dest('dist/js'))
	browserSync.reload();
	done()
});
/**
* Saves the jasmine files to a dist folder
* and also transpiles the code to ES2015.
*/
gulp.task('jasmine', function(done) {
	gulp.src('src/jasmine/spec/*.js')
	.pipe(babel( {
		plugins: ['transform-runtime'],
        presets: ['env']
    }))
	.pipe(gulp.dest('dist/jasmine/spec'))
	browserSync.reload();
	done()
});
/**
* Copies the index.html file to a dist folder on save.
*/
gulp.task('copy-html', function(done) {
	gulp.src('src/index.html')
	.pipe(gulp.dest('dist'))
	browserSync.reload();
	done()
});