// bluebird promisifyAll
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

function* gen() {
  try {
    var data = yield fs.readFileAsync('file1');
    console.log('result', data.toString());
  } catch(err) {
    console.error('居然抓的到！！', err);
  }
  return;
}

// 執行
var g = gen();
// result.value 為 readFileAsync 回傳的 Promise
var result = g.next();
result.value.then( function(data) {
  g.next(data); // 將 result 扔回 generator
})
.catch( function(err) {
  g.throw(err);
});
