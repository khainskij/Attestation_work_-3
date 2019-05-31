var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', async function(){
	gulp.src('./src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./src/css'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('browser-sync', function() {
	browserSync.init(["./src/css/*.css", "./src/**/*.html"], {
		server: {
			baseDir: "./src/"
		}
	})
});

gulp.task('watch', gulp.series('sass', gulp.parallel('browser-sync', 'sass:watch')));

gulp.task('default', gulp.series('watch'));