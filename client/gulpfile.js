'use strict'

var gulp = require('gulp')
var gutil = require('gulp-util')
var gfilter = require('gulp-filter')


var $ = require('gulp-load-plugins')()

var usemin = require('gulp-usemin')
var uglify = require('gulp-uglify')
var minifyHtml = require('gulp-minify-html')
var minifyCss = require('gulp-minify-css')
var clean = require('gulp-clean')
var browserSync = require('browser-sync')
var watch = require('gulp-watch')
var cache = require('gulp-cache')
var imageop = require('gulp-image-optimization')

var conf = require('../config/build')

gulp.task('clean', function(cb) {
  return gulp.src(conf.path.dist, {read: false})
          .pipe(clean())
})

gulp.task('usemin', ['clean'], function() {
  return gulp.src(conf.path.src + '/views/**/*.hbs')
    .pipe(usemin({
      // assetsDir: 'src/static',
      cssmin: minifyCss(),
      htmlmin: minifyHtml(),
      jsmin: uglify()
    }))
    .pipe(gulp.dest(conf.path.dist))
})

gulp.task('templates', ['usemin'], function() {
  return gulp.src(conf.path.dist + '/**/*.hbs')
    .pipe(gulp.dest(conf.path.dist + '/views'))
    .pipe(clean())
})

// gulp.task('images', function(cb) {
//   return gulp.src(conf.path.src + '/static/img/**/*.+(png|jpg|gif|jpeg)')
//     .pipe(cache(imageop({
//       optimizationLevel: 5,
//       progressive: true,
//       interlaced: true
//     }), {
//       key: function(file) {
//         return [file.contents.toString('utf8'), jshintVersion, jshintOptions].join('')
//       }
//     }))
//   .pipe().pipe(gulp.dest(conf.path.dist + '/static/img')).on('end', cb).on('error', cb)
// })

gulp.task('images', function(cb) {
  return gulp.src(conf.path.src + '/static/img/**/*.+(png|jpg|gif|jpeg)')
      .pipe(imageop({
        optimizationLevel: 0
      }))
    .pipe(gulp.dest(conf.path.dist + '/static/img'))

    // .on('end', cb).on('error', cb)
})


gulp.task('browser-sync', function() {
  browserSync({
    proxy: "http://127.0.0.1:8000/"
  })
})

gulp.task('default', ['templates', 'images'])

gulp.task('watch', ['templates', 'browser-sync'], function() {
  // gulp.src('./src')
  //   .pipe(watch('./src/**/*', function(files) {
  //     console.log(11)
  //   }))
  gulp.watch('**/*', ['templates', browserSync.reload])
  
  // gulp.watch('**/*', function(event) {
  //   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
  // })
})