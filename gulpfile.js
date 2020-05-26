const gulp = require('gulp');

const log = require('fancy-log');
const rename = require('gulp-rename');

const ts = require('gulp-typescript');
const babel = require('gulp-babel');

const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const postcss = require('gulp-postcss');
const postcssGridKiss = require('postcss-grid-kiss');

gulp.task('js', function(done) {
  gulp.src('./src/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      outFile: 'output.js',
    }))
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(gulp.dest('./dist/'))
    .on('end', () => done());
});

gulp.task('css', function(done) {
  gulp.src('./src/root.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      postcssGridKiss(),
      // cssnano(),
    ]))
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
