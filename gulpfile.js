
// 获取 gulp
var gulp = require('gulp')
var sass = require('gulp-sass')
// var compass = require('gulp-compass');

let cleanCSS = require('gulp-clean-css');

var fs = require('fs');

// function sync() {
//    setTimeout(function() {
//       fs.writeFile('db.js', 'var refresh =  ' + (++index), function(err){
//           if(err) throw err;
//       });
//     }, 500)
// }


// var index = 0;
gulp.task('sass-header', function() {
     return gulp.src('header/**/sass/*.scss') // Gets all files ending with .scss in app/scss and children dirs 
     .pipe(sass()) 
     .pipe(gulp.dest('dist/tpl-css/header'))
// sync()

      
})

gulp.task('sass-style', function() { 
    return  gulp.src('style/**/sass/*.scss') // Gets all files ending with .scss in app/scss and children dirs 
     .pipe(sass()) 
     .pipe(gulp.dest('dist/tpl-css/style'))
     // sync()
})


gulp.task('sass-footer', function() {
    return gulp.src('footer/**/sass/*.scss') // Gets all files ending with .scss in app/scss and children dirs 
     .pipe(sass()) 
     .pipe(gulp.dest('dist/tpl-css/footer'))
     // sync()
})


// 在命令行使用 gulp auto 启动此任务
// gulp.task('auto', function () {
//     // 监听文件修改，当文件被修改则执行 images 任务
//     gulp.watch('header/**/sass/*.scss', ['sass'])
//     gulp.watch('style/**/sass/*.scss', ['sass'])
//     gulp.watch('footer/**/sass/*.scss', ['sass'])
// });

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 sass 任务和 auto 任务
// gulp.task('default', ['sass-header', 'sass-style', 'sass-footer'])

gulp.task('minify-css', () => {
  return gulp.src('dist/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});


gulp.task('default', ['sass-header', 'sass-footer','sass-style'], function() {
    // gulp.task("minify-css")
    // console.log('red;')
})


// gulp.task('watch', function() {  
//     gulp.watch('header/**/sass/*.scss', ['sass-header'])
//     gulp.watch('style/**/sass/*.scss', ['sass-style', 'sass-style'])
//     gulp.watch('footer/**/sass/*.scss', ['sass-footer'])
// });  