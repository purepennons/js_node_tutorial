// co
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var co = require('co');

function* gen() {
  try {
    var data1 = yield fs.readFileAsync('file1');
    console.log('result1', data1.toString());
    var data2 = yield fs.readFileAsync('file2');
    console.log('result2', data2.toString());
    var data3 = yield fs.readFileAsync('file3');
    console.log('result2', data3.toString());
  } catch(err) {
    console.error('居然抓的到！！', err);
  }
  return 'finish';
}

// run
co(gen)
.then( function(result) {
  console.log(result);
})
.catch( function(err) {
  console.error(err);
});
