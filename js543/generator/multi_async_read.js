// bluebird promisifyAll
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

function* gen() {
  try {
    var data1 = yield fs.readFileAsync('file1');
    console.log('result1', data1.toString());
    var data = yield fs.readFileAsync('file2');
    console.log('result2', data2.toString());
  } catch(err) {
    console.error('居然抓的到！！', err);
  }
  return;
}

// 執行
var g = gen();
// result.value 為 readFileAsync 回傳的 Promise

g.next().value.then( function(data1) {
  return g.next(data1).value;
})
.then( function(data2) {
  return g.next(data2);
})
.catch( function(err) {
  g.throw(err);
});
