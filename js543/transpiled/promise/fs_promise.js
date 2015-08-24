'use strict';

var fs = require('fs');

var readFileAsync = function readFileAsync(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, function (err, data) {
      if (err) return reject(err); // error
      return resolve(data); // fulfill
    });
  });
};

readFileAsync('file1').then(function (data1) {
  console.log('data1', data1.toString());
  return readFileAsync('file2');
}).then(function (data2) {
  console.log('data2', data2.toString());
})['catch'](function (err) {
  console.log(err);
});
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/js543/transpiled/promise/fs_promise.js.map