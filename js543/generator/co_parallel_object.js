// co_parallel_object
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var co = require('co');

function* gen() {
  try {
    var result = yield {
      a: fs.readFileAsync('file1'),
      b: fs.readFileAsync('file2'),
      c: fs.readFileAsync('file3')
    };
    console.log('resul1', result.a.toString());
    console.log('resul2', result.b.toString());
    console.log('resul3', result.c.toString());
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
