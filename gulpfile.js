var gulp = require('gulp');
var gulpGhPages = require('gulp-gh-pages');
var cors = require('cors');

var corsOptions = {
  origin: '*' // 'http://localhost:4000'
};

function startExpress() {
    var express = require('express');
    var app = express();
    app.use(cors(corsOptions));
    app.use(express.static('public'));

    app.listen(11111);
    console.log('http://localhost:11111');
}

gulp.task('connect', function(done) {
    startExpress();
    done();
});
