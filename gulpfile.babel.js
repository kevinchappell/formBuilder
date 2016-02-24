'use strict';

import gulp from 'gulp';
import gulpPlugins from 'gulp-load-plugins';
import bsync from 'browser-sync';
import pkg from './package.json';

var plugins = gulpPlugins(),
banner = () => {
  let buildDate = new Date();
  let bannerTemplate = [
    '/*',
    '<%= pkg.name %> - <%= pkg.homepage %>',
    'Version: <%= pkg.version %>',
    'Author: <%= pkg.authors[0] %>',
    '*/',
    ''
  ].join('\n');
  return plugins.header(bannerTemplate, {
    pkg: pkg,
    now: buildDate
  });
},
rename = (fileName) => {
  return String(fileName).replace(/([A-Z])/g, function($1) {
    return '-' + $1.toLowerCase();
  });
};

const files = {
  test: [
    'test/**/*.spec.js'
  ],
  formBuilder: {
    js: [
      'src/js/kc-toggle.js',
      'src/js/form-builder.js',
      'src/js/to-xml.js'
    ],
    sass: ['src/sass/form-builder.scss']
  },
  formRender: {
    js: [
      'src/js/kc-toggle.js',
      'src/js/form-render.js'
    ],
    sass: ['src/sass/form-render.scss']
  },
  demoSass: [
    'demo/assets/sass/demo.scss'
  ]
};

gulp.task('watch', function() {
  gulp.watch(['src/**/*.js'], ['lint', 'js']);
  gulp.watch('demo/index.html', bsync.reload);
  gulp.watch('src/sass/*.scss', ['css']);
  gulp.watch(files.demoSass, ['demoCss']);
});

gulp.task('css', function() {

  let sassFiles = new Map();
  sassFiles.set('formBuilder', files.formBuilder.sass);
  sassFiles.set('formRender', files.formRender.sass);

  return sassFiles.forEach(function(sassFile, key) {
    gulp.src(sassFile)
      .pipe(plugins.sass())
      .pipe(plugins.autoprefixer({
        cascade: true
      }))
      .pipe(plugins.base64())
      .pipe(banner())
      .pipe(gulp.dest('demo/assets/css'))
      .pipe(gulp.dest('dist/'))
      .pipe(plugins.cssmin())
      .pipe(banner())
      .pipe(plugins.concat(rename(key) + '.min.css'))
      .pipe(gulp.dest('demo/assets/css'))
      .pipe(gulp.dest('dist/'))

    .pipe(bsync.reload({
      stream: true
    }));
  });
});

gulp.task('font', function() {
  return gulp.src(['src/fonts/fontello/css/fontello.css'])
    .pipe(plugins.base64())
    .pipe(plugins.concat('_font.scss'))
    .pipe(gulp.dest('src/sass/'));
});

gulp.task('demoCss', function() {
  return gulp.src(files.demoSass)
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer({
      cascade: true
    }))
    .pipe(plugins.cssmin())
    .pipe(banner())
    .pipe(gulp.dest('demo/assets/css'))
    .pipe(bsync.reload({
      stream: true
    }));
});

// Stylish linting to ensure good JS
gulp.task('lint', function() {
  let js = files.formBuilder.js.concat(files.formRender.js);
  return gulp.src(js)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

gulp.task('js', function() {

  let jsFiles = new Map();
  jsFiles.set('formBuilder', files.formBuilder.js);
  jsFiles.set('formRender', files.formRender.js);

  return jsFiles.forEach(function(jsFileGlob, key) {
    // Demo scripts
    gulp.src(jsFileGlob)
      .pipe(plugins.plumber({errorHandler: false}))
      .pipe(plugins.babel())
      .pipe(plugins.concat(rename(key) + '.js'))
      .pipe(banner())
      .pipe(gulp.dest('demo/assets/js'));

    // Demo scripts minified
    gulp.src(jsFileGlob)
      .pipe(plugins.plumber({errorHandler: false}))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.babel())
      .pipe(plugins.concat(rename(key) + '.min.js'))
      .pipe(plugins.uglify())
      .pipe(banner())
      .pipe(plugins.sourcemaps.write('/'))
      .pipe(gulp.dest('demo/assets/js'));

    // Plugin scripts
    return gulp.src(jsFileGlob)
      .pipe(plugins.plumber())
      .pipe(plugins.babel())
      .pipe(plugins.concat(rename(key) + '.js'))
      .pipe(banner())
      .pipe(gulp.dest('dist/'))
      .pipe(plugins.uglify())
      .pipe(banner())
      .pipe(plugins.concat(rename(key) + '.min.js'))
      .pipe(gulp.dest('dist/'))
      .pipe(bsync.reload({
        stream: true
      }));
  });
});

gulp.task('serve', function() {
  bsync.init({
    server: {
      baseDir: './demo'
    }
  });
});

var increment = (importance) => {
  return gulp.src(['./package.json', './bower.json'])
    .pipe(plugins.bump({
      type: importance
    }))
    .pipe(gulp.dest('./'))
    .pipe(plugins.git.commit('bumps package version'))
    .pipe(plugins.filter('package.json'))
    .pipe(plugins.tagVersion());
};

gulp.task('patch', () => {
  return increment('patch');
});
gulp.task('feature', () => {
  return increment('minor');
});
gulp.task('release', () => {
  return increment('major');
});

// Deploy the demo
gulp.task('deploy', () => {
  var gitArgs = {
    args: 'subtree push --prefix demo origin gh-pages'
  };

  plugins.git.exec(gitArgs, function(err) {
    if (err) {
      console.error('There was an error deploying the Demo to gh-pages\n', err);
      throw err;
    } else {
      console.log('Demo was successfully deployed!\n');
    }
  });
});

gulp.task('build', ['js', 'css']);
gulp.task('default', ['build', 'watch']);
gulp.task('demo', ['build', 'demoCss', 'watch', 'serve']);
