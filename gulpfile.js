// 获取 gulp
var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('sass-header', function() { 
      return gulp.src('header/**/sass/*.scss') // Gets all files ending with .scss in app/scss and children dirs 
     .pipe(sass()) 
     .pipe(gulp.dest('dist/tpl-css/header'))
})

gulp.task('sass-style', function() { 
      return gulp.src('style/**/sass/*.scss') // Gets all files ending with .scss in app/scss and children dirs 
     .pipe(sass()) 
     .pipe(gulp.dest('dist/tpl-css/style'))
})


gulp.task('sass-footer', function() { 
      return gulp.src('footer/**/sass/*.scss') // Gets all files ending with .scss in app/scss and children dirs 
     .pipe(sass()) 
     .pipe(gulp.dest('dist/tpl-css/footer'))
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
gulp.task('default', ['sass-header', 'sass-style', 'sass-footer'])