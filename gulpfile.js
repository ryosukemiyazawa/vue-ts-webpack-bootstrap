var gulp = require('gulp');
var plumber = require('gulp-plumber');

// webpack
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

//sass
var sass = require('gulp-sass');

//sync browser
var browsersync = require("browser-sync").create();

gulp.task('webpack', (done) => {
	gulp.src(["./src/**/*.ts"])
	.pipe(plumber())
	.pipe(webpackStream(webpackConfig, webpack))
	.pipe(gulp.dest('public/dist/'))
	.on('error', function(error) {
		console.log(error);
		this.emit('end');
	})
	done()
})




gulp.task('release', (done) => {
	webpackConfig.mode = "production";
	
	gulp.src(["./src/**/*.ts"])
	.pipe(plumber())
	.pipe(webpackStream(webpackConfig, webpack))
	.pipe(gulp.dest('release/'))
	.on('error', function(error) {
		console.log(error);
		this.emit('end');
	})
	done()
})

gulp.task('sass', (done) => {
  
	//カレンダー
	gulp.src('./sass/style.scss')
	  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	  .pipe(gulp.dest('public/dist/'))
	done()
	
})

gulp.task("watch", (done) => {
	gulp.watch(["src/**/*.ts", "src/**/*.vue", "src/**/*.es6", "src/**/*.js"], gulp.series('default','browser-reload'));
	gulp.watch(["sass/**/*.scss", "sass/*.scss"], gulp.series('sass','browser-reload'));
	done()
})


gulp.task('server', (done) => {
	browsersync.init({
        server: {
            baseDir: "./public"
        }
    });
    done();
    console.log('Server was launched');
})

gulp.task('browser-reload', function (done){
    browsersync.reload();
    done();
    console.log('Browser reload completed');
});

gulp.task('default',gulp.parallel('webpack'))

