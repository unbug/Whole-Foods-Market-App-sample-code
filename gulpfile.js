var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var fs = require('fs');

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var through2 = require('through2');
var $ = require('gulp-load-plugins')();
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('test:android', function(){
  return gulp.src('android-*.js', {read: false})
    .pipe($.spawnMocha({
      R: 'mochawesome',
      O: 'reportDir=reports,reportName=index',
      istanbul: true
    }))
});


gulp.task('default', function(cb){
  runSequence('test:android',cb);
});
