var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

fs.readFileAsync('file1')
.then(function(data) {
  console.log(data.toString());
})
.catch(function(err) {
  console.error(err);
});
