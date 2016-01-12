var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var babel = require('gulp-babel');
var jasmine = require('gulp-jasmine');
var plumber = require('gulp-plumber');
//var sourcemaps = require('gulp-sourcemaps');
var webpackConfig = require("./webpack.config.js");

gulp.task('transpile', function () {
    gulp.src(['src/*.js'])
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch(['./src/*.js'], ['spec']);
});

gulp.task('spec', function () {
    gulp.src(['src/*.js', '!src/main.js'])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest('dist'))
        .pipe(jasmine());
});

gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task('default', ['spec', 'watch']);
