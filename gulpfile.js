var serve             = require('browser-sync').create()
var historyFallback   = require('connect-history-api-fallback')
var Dotenv            = require('dotenv-webpack')
var gulp              = require('gulp')
var cssnano           = require('gulp-cssnano')
var processhtml       = require('gulp-processhtml')
var sass              = require('gulp-sass')
var sourcemaps        = require('gulp-sourcemaps')
var watch             = require('gulp-watch')
var path              = require('path')
var run               = require('run-sequence')
var webpackStream     = require('webpack-stream')

// PATH
var BUILD   = './build'
var DIST    = './dist'
var PATH    = {
  HTML: {
    BUILD: path.join(BUILD, 'html/*.html'),
    WATCH: path.join(BUILD, 'html/**/*.html'),
    OUTPUT: DIST
  },
  SASS: {
    BUILD: path.join(BUILD, 'sass/style.scss'),
    WATCH: path.join(BUILD, 'sass/**/*.scss'),
    OUTPUT: path.join(DIST, 'assets/css')
  },
  JSX: {
    BUILD: path.join(BUILD, 'jsx/script.js'),
    WATCH: path.join(BUILD, 'jsx/**/*.js'),
    OUTPUT: path.join(DIST, 'assets/js')
  }
}

// compile html
gulp.task('html', function() {
  return gulp.src(PATH.HTML.BUILD)
    .pipe(processhtml())
    .pipe(gulp.dest(PATH.HTML.OUTPUT))
})

// compile sass
gulp.task('sass', function() {
  return gulp.src(PATH.SASS.BUILD)
    .pipe(sourcemaps.init())
    .pipe(sass({ includePaths: 'node_modules/' }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(PATH.SASS.OUTPUT))
})

gulp.task('sass:min', function() {
  return gulp.src(PATH.SASS.BUILD)
    .pipe(sass({ includePaths: 'node_modules/', outputStyle: 'compressed' }))
    .pipe(cssnano())
    .pipe(gulp.dest(PATH.SASS.OUTPUT))
})

// compile react
gulp.task('react', function() {
  return gulp.src(PATH.JSX.WATCH)
    .pipe(webpackStream({
      devtool: 'cheap-module-eval-source-map',
      output: {
        filename: 'script.js'
      },
      module: {
        loaders: [{
          test: /\.jsx?/,
          include: path.join(__dirname, 'build/jsx'),
          loader: 'babel',
          query: {
            cacheDirectory: true
          }
        }, {
          test: /\.json$/,
          loader: 'json-loader'
        }]
      },
      plugins: [
        new Dotenv({
          path: './.env',
          safe: true
        })
      ]
    })).on('error', function() {
      this.emit('end')
    })
    .pipe(gulp.dest(PATH.JSX.OUTPUT))
})

gulp.task('react:min', function() {
  return gulp.src(PATH.JSX.WATCH)
    .pipe(webpackStream(require('./webpack.config.js')))
    .pipe(gulp.dest(PATH.JSX.OUTPUT))
})

// watch development files
gulp.task('watch', function() {
  watch(PATH.SASS.WATCH, function() { run('sass') })
  watch(PATH.HTML.WATCH, function() { run('html') })

  watch(PATH.JSX.WATCH, function() {
    run('react', function() {
      serve.reload()
    })
  })
})

// serve
gulp.task('browser', function() {
  serve.init({
    open: false,
    server: {
      baseDir: DIST,
      middleware: [
        historyFallback()
      ]
    }
  })
})

// running all task
gulp.task('default', function() {
  run('html', 'sass', 'react', 'watch', 'browser')
})

// minify files
gulp.task('build', function() {
  run('html', 'sass:min', 'react:min')
})
