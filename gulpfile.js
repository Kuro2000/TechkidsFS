var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task("server", ["liveload"], function(){

});

gulp.task("liveload", ["run"], function(){
  browserSync.init({
    proxy: "localhost:3000",
    files: ["./Client/**/*.*", "./Client/templates/*.*"],
    browser: ["google chrome"],
    port: "7000"
  });
});

gulp.task("run", [], function(){
  var started = false;
  return nodemon({
    script: "server.js"
  }).on('start', function(){
    if (!started){
      cb();
      started = true;
    }
  });
});
