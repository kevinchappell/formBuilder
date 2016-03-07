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
   * Reusabled banner function for generated files.
   *
   * @return {stream} modified file back to the stream.
   */
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
    let openFont = {
      linux: `/opt/google/chrome/google-chrome --enable-plugins ${pkg.config.fontServer}/$(cat .fontello)`,
      darwin: `open -a "Google Chrome" ${pkg.config.fontServer}/$(cat .fontello)`,
      win32: `start chrome "${pkg.config.fontServer}/$(cat .fontello)"`
    };

    if (!openFont[platform]) {
      return false;
    }

    // Connects to font server to get a fresh token for our editing session.
    // sends current config in the process.
    let getFontToken = `curl --silent --show-error --fail --output .fontello --form "config=@${files.formBuilder.fonts}/config.json" ${pkg.config.fontServer} \n`;

    return exec(getFontToken + openFont[platform], function(err, stdout, stderr) {
      console.log(stdout);
      if (stderr) {
        console.error(err, stderr);
      }
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
      return gulp.src([`${files.formBuilder.fonts}/css/form-builder-font.css`])
        .pipe(plugins.base64())
        .pipe(plugins.concat('_font.scss'))
        .pipe(gulp.dest('src/sass/base/'));
      if (stderr) {
        console.error(err, stderr);
      }
    });
  };

// Our watch task to monitor files for changes and run tasks when that change happens.
gulp.task('watch', function() {
  gulp.watch(['src/**/*.js'], ['lint', 'js']);
  gulp.watch('demo/index.html', bsync.reload);
  gulp.watch('src/sass/*.scss', ['css']);
  gulp.watch(files.demoSass, ['demoCss']);
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

// Font editing tasks
gulp.task('font-edit', fontEdit);
gulp.task('font-save', fontSave);

// Demo specific css
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

// Compile the JS
gulp.task('js', function() {

  let jsFiles = new Map();
  jsFiles.set('formBuilder', files.formBuilder.js);
  jsFiles.set('formRender', files.formRender.js);

  return jsFiles.forEach(function(jsFileGlob, key) {
    // Demo scripts
    gulp.src(jsFileGlob)
      .pipe(plugins.plumber({ errorHandler: false }))
      .pipe(plugins.babel())
      .pipe(plugins.concat(rename(key) + '.js'))
      .pipe(banner())
      .pipe(gulp.dest('demo/assets/js'));

    // Demo scripts minified
    gulp.src(jsFileGlob)
      .pipe(plugins.plumber({ errorHandler: false }))
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
  var gitArgs = {
    args: 'subtree push --prefix demo origin gh-pages'
  };

  plugins.git.exec(gitArgs, function(err) {
    if (err) {
      console.error('There was an error deploying the Demo to gh-pages.\n', err);
      throw err;
    } else {
      console.log('Demo was successfully deployed!\n');
    }
  });
});

// Do a build after version bump to update all files.
gulp.task('build', ['js', 'css', 'demoCss']);

// Pretty self-explanatory
gulp.task('default', ['build', 'watch', 'serve']);
