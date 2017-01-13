'use strict';
 
var gulp = require('gulp'),
	sass  = require('gulp-sass'),
 	notify = require("gulp-notify") ;

var src={
	scss: "./scss/**/*.scss",
	css: "./css",
	html: "**/*.html",
};


var config={
	nodesPath : './node_modules/bootstrap-sass'
}

gulp.task("sass",function(){
	return gulp.src(src.scss)
		 .pipe(sass({
             style: 'expanded',
             includePaths: [
                 './scss',
                 config.nodesPath + '/assets/stylesheets',
             ],
         }) 
		  .on("error", notify.onError(function (error) {
                 return "Error: " + error.message;
             }))) 
		.pipe(gulp.dest(src.css));
});

gulp.task('watch',function(){
	gulp.watch(src.scss,['sass']);
})

gulp.task('default',['watch']);