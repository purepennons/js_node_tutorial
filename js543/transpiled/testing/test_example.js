'use strict';

var Example = module.exports = exports;
var fs = require('fs');

exports.factorial = function (n, total) {
  if (n <= 1) return total;
  return Example.factorial(n - 1, n * total);
};

exports.readFileAsync = function (file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, function (err, data) {
      if (err) return reject(err); // error
      return resolve(data); // fulfill
    });
  });
};
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/js543/transpiled/testing/test_example.js.map