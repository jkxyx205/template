
// 获取 gulp
var gulp = require('gulp')
var sass = require('gulp-sass')
// var compass = require('gulp-compass');

let cleanCSS = require('gulp-clean-css');

var fs = require('fs');

var minimist = require('minimist');

var knownOptions = {
  string: 'site_id',
  default: { site_id: '' }
};

var options = minimist(process.argv.slice(2), knownOptions);

gulp.task('build', function() {
    return gulp.src(
    [
    'core/**/*.scss',
    '!core/buttons/**',
    '!core/fonts/**'
    ])
    .pipe(sass()) 
    .pipe(gulp.dest('dist/' + options.site_id))
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

gulp.task('default', ['build'], function() {
    // gulp.task("minify-css")
    // console.log('red;')
})


// gulp.task('default', ['sass-header', 'sass-footer','sass-style'], function() {
    // gulp.task("minify-css")
    // console.log('red;')
// })


// gulp.task('watch', function() {  
//     gulp.watch('header/**/sass/*.scss', ['sass-header'])
//     gulp.watch('style/**/sass/*.scss', ['sass-style', 'sass-style'])
//     gulp.watch('footer/**/sass/*.scss', ['sass-footer'])
// });  