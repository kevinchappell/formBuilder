'use strict';

var gulp = require('gulp'),
  git = require('gulp-git'),
  bump = require('gulp-bump'),
  sass = require('gulp-sass'),
  babel = require('gulp-babel'),
  ugly = require('gulp-uglify'),
  bsync = require('browser-sync'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
  header = require('gulp-header'),
  cssmin = require('gulp-cssmin'),
  pkg = require('./package.json'),
  filter = require('gulp-filter'),
  tagVersion = require('gulp-tag-version'),
  autoprefixer = require('gulp-autoprefixer'),
  reload = bsync.reload;

var files = {
  test: [
    'test/**/*.spec.js'
  ],
  js: [
    'src/js/form-builder.js'
  ],
  sass: [
    'src/sass/form-builder.scss'
  ],
  demoSass: [
    'demo/assets/sass/demo.scss'
  ]
};


var banner = [
  '/*',
  '<%= pkg.name %> - <%= pkg.repository.url %>',
  'Version: <%= pkg.version %>',
  'Author: <%= pkg.authors[0] %>',
  '*/',
  ''
].join('\n');

gulp.task('watch', function() {
  gulp.watch(['src/**/*.js'], ['lint', 'js']);
  gulp.watch('demo/index.html', reload);
  files.sass.push('src/sass/*.scss');
  gulp.watch(files.sass, ['css']);
});

gulp.task('css', function() {

  return gulp.src(files.sass)
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: true
    }))
    .pipe(cssmin())
    .pipe(header(banner, {
      pkg: pkg,
      now: new Date()
    }))
    .pipe(gulp.dest('demo/assets'))
    .pipe(gulp.dest('dist/'))
    .pipe(reload({
      stream: true
    }));

});

gulp.task('demoCss', function() {

  return gulp.src(files.demoSass)
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: true
    }))
    .pipe(cssmin())
    .pipe(header(banner, {
      pkg: pkg,
      now: new Date()
    }))
    .pipe(gulp.dest('demo/assets'))
    .pipe(reload({
      stream: true
    }));

});

gulp.task('lint', function() {
  return gulp.src(files.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('img', function() {
  return gulp.src('src/img/*')
    .pipe(gulp.dest('demo/assets/img'));
});

gulp.task('js', function() {
  return gulp.src(files.js)
    .pipe(babel())
    .pipe(concat('form-builder.js'))
    .pipe(header(banner, {
      pkg: pkg,
      now: new Date()
    }))
    .pipe(gulp.dest('demo/assets'))
    .pipe(gulp.dest('dist/'))
    .pipe(ugly())
    .pipe(header(banner, {
      pkg: pkg,
      now: new Date()
    }))
    .pipe(concat('form-builder.min.js'))
    .pipe(gulp.dest('demo/assets'))
    .pipe(gulp.dest('dist/'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('serve', function() {
  bsync.init({
    server: {
      baseDir: './demo'
    }
  });
});


function increment(importance) {
  // get all the files to bump version in
  return gulp.src(['./package.json', './bower.json'])
    // bump the version number in those files
    .pipe(bump({
      type: importance
    }))
    // save it back to filesystem
    .pipe(gulp.dest('./'))
    // commit the changed version number
    .pipe(git.commit('bumps package version'))
    // read only one file to get the version number
    .pipe(filter('package.json'))
    // **tag it in the repository**
    .pipe(tagVersion());
}

gulp.task('patch', function() {
  return increment('patch');
});
gulp.task('feature', function() {
  return increment('minor');
});
gulp.task('release', function() {
  return increment('major');
});


gulp.task('default', ['js', 'watch']);
gulp.task('demo', ['js', 'css', 'demoCss', 'img', 'watch', 'serve']);
