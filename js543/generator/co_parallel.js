// co_parallel_array
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var co = require('co');

function* gen() {
  try {
    var p1 = fs.readFileAsync('file1');
    var p2 = fs.readFileAsync('file2');
    var p3 = fs.readFileAsync('file3');
    var result = yield [p1, p2, p3];
    console.log('resul1', result[0].toString());
    console.log('resul2', result[1].toString());
    console.log('resul3', result[2].toString());
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
