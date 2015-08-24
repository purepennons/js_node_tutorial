'use strict';

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

fs.readFileAsync('file1').then(function (data) {
  console.log(data.toString());
})['catch'](function (err) {
  console.error(err);
});
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/js543/transpiled/promise/bluebird.js.map