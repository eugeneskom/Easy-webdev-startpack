const {
	src,
	dest
} = require('gulp');
const include = require('gulp-file-include');
const bs = require('browser-sync');
const strip = require('gulp-strip-comments');

module.exports = function html() {
	return src(['src/**/*.html', '!src/components/**/*.html'])
		.pipe(include())
  .pipe(strip())
		.pipe(dest('build'))
		.pipe(bs.stream())
}