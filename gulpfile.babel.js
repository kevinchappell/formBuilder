'use strict';

import gulp from 'gulp';
import gulpPlugins from 'gulp-load-plugins';
import bsync from 'browser-sync';
import pkg from './package.json';

const files = pkg.config.files;

// Rather than manually defined each gulp plugin we need, gulpPlugins defines them for us.
var plugins = gulpPlugins(),
  // for executing commands in the command line
  exec = require('child_process').exec,
  platform = process.platform,

  /**
   * Reusable banner function for generated files.
   *
   * @return {stream} modified file back to the stream.
   */
  banner = () => {
    let buildDate = new Date();
    let bannerTemplate = [
      '/*',
      '<%= pkg.name %> - <%= pkg.homepage %>',
      'Version: <%= pkg.version %>',
      'Author: <%= pkg.author %>',
      '*/',
      ''
    ].join('\n');

    return plugins.header(bannerTemplate, {
      pkg: pkg,
      now: buildDate
    });
  },

  /**
   * camelCase to hyphen-case renaming utility.
   * Used when iterating though an object where the keys are used as filenames.
   *
   * @param  {string} fileName
   * @return {string} file-name
   */
  rename = (fileName) => {
    return String(fileName).replace(/([A-Z])/g, function($1) {
      return '-' + $1.toLowerCase();
    });
  },

  /**
   * Opens the font-server defined in package.json
   *
   * @return {void} logs to terminal.
   */
  fontEdit = () => {
    let fs = require('fs'),
      open = require('opener');

    // Connects to font server to get a fresh token for our editing session.
    // sends current config in the process.
    let getFontToken = `curl --silent --show-error --fail --output .fontello --form "config=@${files.formBuilder.fonts}/config.json" ${pkg.config.fontServer} \n`;

    return fs.readFile('.fontello', function(error, token) {
      return exec(getFontToken, function(err, stdout, stderr) {
        open(`${pkg.config.fontServer}/${token}`);
        if (stderr) {
          console.error(err, stderr);
        }
      });
    });
  },

  /**
   * Downloads and unpacks our updated font from the fontServer
   *
   * @return {void} logs operations to terminal.
   */
  fontSave = () => {
    var script = [
      'if test ! $(which unzip); then echo "Unzip is installed"; exit 128; fi',
      'rm -rf .fontello.src .fontello.zip',
      `curl --silent --show-error --fail --output .fontello.zip ${pkg.config.fontServer}/$(cat .fontello)/get`,
      'unzip .fontello.zip -d .fontello.src',
      `rm -rf ${files.formBuilder.fonts}`,
      `mv $(find ./.fontello.src -maxdepth 1 -name 'fontello-*') ${files.formBuilder.fonts}`,
      'rm -rf .fontello.src .fontello.zip'
    ];

    exec(script.join(' \n '), function(err, stdout, stderr) {
      console.log(stdout);
      if (stderr) {
        console.error(err, stderr);
      }
      return gulp.src([`${files.formBuilder.fonts}/css/form-builder-font.css`])
        .pipe(plugins.base64())
        .pipe(plugins.concat('_font.scss'))
        .pipe(gulp.dest('src/sass/base/'));
    });
  };

// Our watch task to monitor files for changes and run tasks when that change happens.
gulp.task('watch', function() {
  gulp.watch(['src/**/*.js'], ['lint', 'devJS']);
  gulp.watch('demo/*.html', bsync.reload);
  gulp.watch('src/sass/**/*.scss', ['css']);
});

// Compile the Sass to plain ol' css.
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

// Font editing tasks
gulp.task('font-edit', fontEdit);
gulp.task('font-save', fontSave);

// Stylish linting to ensure good JS
gulp.task('lint', function() {
  let js = files.formBuilder.js.concat(files.formRender.js);
  return gulp.src(js)
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'));
});

// Compile the JS
gulp.task('js', function() {

  let jsFiles = new Map();
  jsFiles.set('formBuilder', files.formBuilder.js);
  jsFiles.set('formRender', files.formRender.js);

  return jsFiles.forEach(function(jsFileGlob, key) {
    // Demo scripts minified
    gulp.src(jsFileGlob)
      .pipe(plugins.plumber({
        errorHandler: false
      }))
      .pipe(plugins.babel())
      .pipe(plugins.concat(rename(key) + '.min.js'))
      .pipe(plugins.uglify())
      .pipe(banner())
      .pipe(gulp.dest('demo/assets/js'));

    // Plugin scripts
    return gulp.src(jsFileGlob)
      .pipe(plugins.plumber({
        errorHandler: false
      }))
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

// Compile the Dev JS
gulp.task('devJS', function() {

  let jsFiles = new Map();
  jsFiles.set('formBuilder', files.formBuilder.js);
  jsFiles.set('formRender', files.formRender.js);

  return jsFiles.forEach(function(jsFileGlob, key) {

    // Demo scripts minified
    return gulp.src(jsFileGlob)
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init({
        loadMaps: true
      }))
      .pipe(plugins.babel())
      .pipe(plugins.concat(rename(key) + '.min.js'))
      .pipe(plugins.uglify())
      .pipe(plugins.sourcemaps.write('/'))
      .pipe(gulp.dest('demo/assets/js'))
      .pipe(bsync.reload({
        stream: true
      }));
  });
});

// BrowserSync server for local editing.
gulp.task('serve', function() {
  bsync.init({
    server: {
      baseDir: './demo'
    }
  });
});

// Deploy the demo
gulp.task('deploy', () => {
  exec('OVERCOMMIT_DISABLE=1 git push origin $(git subtree split --prefix demo master):gh-pages --force', function(err, stdout, stderr) {
    exec('cd site && gulp deploy && cd ../', function(err, stdout, stderr) {
      if (!stderr) {
        console.log('Site successfully deployed');
      } else {
        console.error(stderr);
      }
    });
    if (!stderr) {
      console.log('Demo successfully deployed');
    } else {
      console.error(stderr);
    }
  });
});

// Do a build after version bump to update all files.
gulp.task('build', ['js', 'css']);

// Pretty self-explanatory
gulp.task('default', ['devJS', 'css', 'watch', 'serve']);
