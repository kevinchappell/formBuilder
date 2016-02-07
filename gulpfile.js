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
  rename = require('gulp-rename'),
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
  formBuilder: {
    js: [
      'src/js/kc-toggle.js',
      'src/js/form-builder.js'
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
  gulp.watch('src/sass/*.scss', ['css']);
  gulp.watch(files.demoSass, ['demoCss']);
});

function buildCSS() {

  let sassFiles = [
    files.formBuilder.sass,
    files.formRender.sass
  ];

  return sassFiles.forEach(function(sassFile) {
    gulp.src(sassFile)
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: true
      }))
      .pipe(header(banner, {
        pkg: pkg,
        now: new Date()
      }))
      .pipe(gulp.dest('dist/'))
      .pipe(rename({ suffix: '.min' }))
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

}

gulp.task('css', buildCSS);

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
  let js = files.formBuilder.js.concat(files.formRender.js);
  return gulp.src(js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('img', function() {
  return gulp.src('src/img/*')
    .pipe(gulp.dest('demo/assets/img'));
});

function buildJS() {

  let jsFiles = new Map();
  jsFiles.set('formBuilder', files.formBuilder.js);
  jsFiles.set('formRender', files.formRender.js);

  return jsFiles.forEach(function(jsFileGlob, key) {
    let fileName = key.replace(/([A-Z])/g, function($1) {
      return '-' + $1.toLowerCase();
    });

    gulp.src(jsFileGlob)
      .pipe(babel())
      .pipe(concat(fileName + '.js'))
      .pipe(header(banner, {
        pkg: pkg,
        now: new Date()
      }))
      .pipe(gulp.dest('dist/'))
      .pipe(ugly())
      .pipe(header(banner, {
        pkg: pkg,
        now: new Date()
      }))
      .pipe(concat(fileName + '.min.js'))
      .pipe(gulp.dest('demo/assets'))
      .pipe(gulp.dest('dist/'))
      .pipe(reload({
        stream: true
      }));

  });
}

gulp.task('js', buildJS);

gulp.task('serve', function() {
  bsync.init({
    server: {
      baseDir: './demo'
    }
  });
});


function increment(importance) {
  var stream = gulp.src(['./package.json', './bower.json'])
    .pipe(bump({
      type: importance
    }))
    .pipe(gulp.dest('./'));

  console.log('\nBuilding JS');
  buildJS();
  console.log('Building CSS\n');
  buildCSS();

  stream
    .pipe(git.commit('bumps package version'))
    .pipe(filter('package.json'))
    .pipe(tagVersion());

  git.push('origin', 'master');

  git.exec({
    args: 'push --tags'
  }, function(err, stdout) {
    if (err) {
      console.error('Could not push tags\n', err);
      throw err;
    } else {
      console.log('Tags Successfully pushed\n');
    }
  });

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

// Deploy the demo
gulp.task('deploy', function() {
  git.exec({
    args: 'subtree push --prefix demo origin gh-pages'
  }, function(err, stdout) {
    if (err) {
      console.error('There was an error deploying the Demo to gh-pages\n', err);
      throw err;
    } else {
      console.log('Demo was successfully deployed!\n');
    }
  });
});

gulp.task('build', ['js', 'css']);
gulp.task('default', ['js', 'watch']);
gulp.task('demo', ['js', 'css', 'demoCss', 'img', 'watch', 'serve']);
