const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const log = require('fancy-log');
const postcss = require('gulp-postcss');
const postcssGridKiss = require('postcss-grid-kiss');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');

gulp.task('js', function(done) {
  gulp.src('./src/*.ts')
    .pipe(ts({
      noImplictAny: true,
      outFile: 'output.js',
    }))
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(gulp.dest('./dist/'))
    .on('end', () => done());
});

gulp.task('css', function(done) {
  // Post-process, minify and concatenate css files
  gulp.src('./src/root.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      postcssGridKiss(),
      // cssnano(),
    ]))
    .on('end', () => log("Post-processing CSS"))
    .pipe(rename("index.css"))
    .pipe(gulp.dest('./dist/'))
    .on('end', () => done());
});

gulp.task('static', function(done) {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist/'))
    .on('end', () => done());
});

gulp.task('default', gulp.series('js','css','static'));
