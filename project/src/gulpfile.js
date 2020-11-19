const gulp = require("gulp"),
  sass = require("gulp-sass"),
  autoprefixer = require("autoprefixer"),
  prefix = require("gulp-autoprefixer"),
  rename = require("gulp-rename"),
  cssnano = require("cssnano"),
  postcss = require("gulp-postcss"),
  cleanCSS = require("gulp-clean-css"),
  imagemin = require("gulp-imagemin"),
  changed = require("gulp-changed");
let autoprefixBrowsers = [
  "> 1%",
  "last 2 versions",
  "firefox >= 4",
  "safari 7",
  "safari 8",
  "IE 8",
  "IE 9",
  "IE 10",
  "IE 11",
];
const SCSS_SRC = "./*.scss",
  SCSS_DEST = "./css",
  IMG_SRC = "./images/*",
  MIM_IMG_DESR = "./mimified-img";

function style() {
  const processors = [autoprefixer, cssnano];
  return gulp
    .src(SCSS_SRC)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss(processors)) /*add*/ // PostCSS plugins
    .pipe(cleanCSS())
    .pipe(prefix({ browsers: autoprefixBrowsers }))
    .pipe(changed(SCSS_SRC))
    .pipe(gulp.dest(SCSS_DEST));
}
function imageMimify() {
  return gulp
    .src(IMG_SRC)
    .pipe(imagemin())
    .pipe(gulp.dest(MIM_IMG_DESR));
}
function watch() {
  gulp.watch(SCSS_SRC, style);
  gulp.watch(IMG_SRC, imageMimify);
}
gulp.task("test", watch);
var build = gulp.series(gulp.parallel(imageMimify, watch));
gulp.task(build);
gulp.task("default", build);
