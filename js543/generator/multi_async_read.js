// multi_async
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

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
  return;
}

// 執行
var g = gen();
g.next().value.then( function(data1) {
  return g.next(data1).value;
})
.then( function(data2) {
  return g.next(data2).value;
})
.then( function(data3) {
  return g.next(data3).value;
})
.catch( function(err) {
  g.throw(err);
});
