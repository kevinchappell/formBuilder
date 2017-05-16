'use strict';

import gulp from 'gulp';
import gulpPlugins from 'gulp-load-plugins';
import bsync from 'browser-sync';
import semver from 'semver';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import pkg from './package.json';
import fs from 'fs';

const files = pkg.config.files;

// gulp-* plugins
const plugins = gulpPlugins();

// for executing commands in the command line
const exec = require('child_process').exec;

/**
 * Reusable banner function for generated files.
 *
 * @return {stream} modified file back to the stream.
 */
const banner = () => {
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
};

/**
 * camelCase to hyphen-case renaming utility.
 * Used when iterating though an object where the keys are used as filenames.
 *
 * @param  {string} fileName
 * @return {string} file-name
 */
const rename = (fileName) => {
  return String(fileName).replace(/([A-Z])/g, function($1) {
    return '-' + $1.toLowerCase();
  });
};

/**
 * Opens the font-server defined in package.json
 *
 * @return {void} logs to terminal.
 */
const fontEdit = () => {
  const fs = require('fs');
  const open = require('opener');

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
};

/**
 * Downloads and unpacks our updated font from the fontServer
 *
 * @return {void} logs operations to terminal.
 */
const fontSave = () => {
  let script = [
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

// Our watch task to monitor files for changes and
// run tasks when that change happens.
gulp.task('watch', function() {
  gulp.watch(['src/**/*.js'], ['devJS']);
  gulp.watch('demo/*.html', bsync.reload);
  gulp.watch('src/sass/**/*.scss', ['devCss']);
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
      .pipe(gulp.dest('dist/'));
  });
});

gulp.task('devCss', function() {
  let sassFiles = new Map();
  sassFiles.set('formBuilder', files.formBuilder.sass);
  sassFiles.set('formRender', files.formRender.sass);

  return sassFiles.forEach(function(sassFile, key) {
    gulp.src(sassFile)
      .pipe(plugins.sass({sourcemap: true}))
      .on('error', err => console.error('Error!', err.message))
      .pipe(plugins.autoprefixer({cascade: true}))
      .pipe(plugins.base64())
      .pipe(plugins.concat(rename(key) + '.css'))
      .pipe(gulp.dest('demo/assets/css'))
      .pipe(bsync.stream());
  });
});

// Font editing tasks
gulp.task('font-edit', fontEdit);
gulp.task('font-save', fontSave);

// Stylish linting to ensure good JS
gulp.task('lint', function() {
  let js = files.formBuilder.js.concat(files.formRender.js);
  return gulp.src(js)
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format());
});

gulp.task('demoVendor', () => {
  return gulp.src(files.demo.vendor.js)
    .pipe(plugins.plumber())
    .pipe(plugins.concat('vendor.min.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('demo/assets/js/'));
});

// Compile the JS
gulp.task('js', function() {
  let jsFiles = new Map();
  jsFiles.set('formBuilder', files.formBuilder.js);
  jsFiles.set('formRender', files.formRender.js);

  // plugins
  gulp.src('src/js/control_plugins/*.es5.js')
    .pipe(plugins.regexRename(/\.es5\.js$/, '.min.js'))
    .pipe(plugins.iife({
      useStrict: false,
      params: ['$'],
      args: ['jQuery']
    }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('demo/assets/js/control_plugins'))
    .pipe(gulp.dest('dist/control_plugins'));


  return jsFiles.forEach(function(jsFileGlob, key) {
    const fileName = rename(key);
    return browserified(jsFileGlob)
    .bundle()
    .pipe(source(fileName + '.js'))
    .pipe(buffer())
    .pipe(plugins.plumber())
    .pipe(banner())
    .pipe(plugins.concat(fileName + '.js'))
    .pipe(plugins.iife({
      useStrict: false,
      params: ['$'],
      args: ['jQuery']
    }))
    .pipe(gulp.dest('demo/assets/js/'))
    .pipe(gulp.dest('dist/'))
    .pipe(plugins.uglify())
    .pipe(banner())
    // .pipe(gulp.dest('demo/assets/js/'+ fileName + '.min.js'));
    .pipe(plugins.concat(fileName + '.min.js'))
    .pipe(gulp.dest('demo/assets/js/'))
    .pipe(gulp.dest('dist/'));
  });
});

const browserified = (src) => browserify({entries: src, debug: true});

// Compile the Dev JS
gulp.task('devJS', function() {
  let jsFiles = new Map();
  jsFiles.set('formBuilder', files.formBuilder.js);
  jsFiles.set('formRender', files.formRender.js);

  // plugins
  gulp.src('src/js/control_plugins/*.es5.js')
    .pipe(plugins.regexRename(/\.es5\.js$/, '.min.js'))
    .pipe(plugins.plumber())
    .pipe(plugins.sourcemaps.init({
      loadMaps: true
    }))
    .pipe(plugins.iife({
      useStrict: false,
      params: ['$'],
      args: ['jQuery']
    }))
    .pipe(plugins.uglify())
    .on('control plugin error', console.log)
    .pipe(plugins.sourcemaps.write('/'))
    .pipe(gulp.dest('demo/assets/js/control_plugins'));

  return jsFiles.forEach(function(jsFileGlob, key) {
    const fileName = rename(key);
    // Demo scripts minified
    return browserified(jsFileGlob)
      .bundle()
      .pipe(source(fileName + '.min.js'))
      .pipe(buffer())
      .pipe(plugins.plumber())
      .pipe(plugins.sourcemaps.init({
        loadMaps: true
      }))
      .pipe(plugins.iife({
        useStrict: false,
        params: ['$'],
        args: ['jQuery']
      }))
      .pipe(plugins.uglify())
      .on('error', console.log)
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
    },
    open: false
  });
});

// Deploy the demo and site.
// Usually used in combination with `gulp tag`
// ex. `gulp tag && gulp deploy`
gulp.task('deploy', () => {
  exec('git push origin $(git subtree split --prefix demo master):gh-pages --force', function(err, stdout, stderr) {
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

// Updates package.json, bower.json, README.md and
// CHANGELOG.md then tags and pushes
gulp.task('tag', (done) => {
  const args = process.argv.slice(2);
  const releaseArg = args[1] || '--patch';
  const releaseType = releaseArg.replace('--', '');
  const oldVer = pkg.version;
  const newVer = semver.inc(oldVer, releaseType);
  const lastLog = fs.readFileSync('./CHANGELOG.md', 'utf8').split('\n')[2];

  exec('git log -1 HEAD --pretty=format:%s', function(err, gitLog) {
    gitLog = gitLog.replace(/\(#(\d+)\)/g, '[#$1](https://github.com/kevinchappell/formBuilder/pull/$1)');

    let updateJSON = gulp.src(['', './bower.json', './package.json'])
    .pipe(plugins.bump({version: newVer}))
    .pipe(gulp.dest('./'));

    updateJSON.on('end', function() {
      let updateMD = gulp.src(['README.md', 'CHANGELOG.md'])
      .pipe(plugins.replace('formBuilder v' + oldVer, 'formBuilder v' + newVer))
      .pipe(plugins.replace(lastLog, `- v${newVer} - ${gitLog}\n${lastLog}`))
      .pipe(gulp.dest('./'));

      updateMD.on('end', function() {
        exec(`npm run build && git commit -am "v${newVer}" && git tag v${newVer} && git push origin master --tags && npm publish`, function(err, stdout) {
          if (!err) {
            console.log(stdout);
            console.log(`Tag v${newVer} successfully pushed.`);
          } else {
            console.error(err);
          }
        });
        // run some code here
        done();
      });
    });
  });
});

// Do a build after version bump to update all files.
gulp.task('build', ['js', 'css']);

// Pretty self-explanatory
gulp.task('default', ['devJS', 'devCss', 'watch', 'serve']);
