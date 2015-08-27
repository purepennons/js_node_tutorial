// multi_async_run
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

// executor
function run(gen){
  var g = gen();

  function next(data){
    var result = g.next(data);
    if (result.done) return result.value;
    result.value.then(function(data){
      next(data);
    })
    .catch( function(err) {
      g.throw(err);
    });
  }

  next();
}

// 執行
run(gen);
