// bluebird promisifyAll
'use strict';

var marked0$0 = [gen].map(regeneratorRuntime.mark);
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

function gen() {
  var data1, data;
  return regeneratorRuntime.wrap(function gen$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return fs.readFileAsync('file1');

      case 3:
        data1 = context$1$0.sent;

        console.log('result1', data1.toString());
        context$1$0.next = 7;
        return fs.readFileAsync('file2');

      case 7:
        data = context$1$0.sent;

        console.log('result2', data2.toString());
        context$1$0.next = 14;
        break;

      case 11:
        context$1$0.prev = 11;
        context$1$0.t0 = context$1$0['catch'](0);

        console.error('居然抓的到！！', context$1$0.t0);

      case 14:
        return context$1$0.abrupt('return');

      case 15:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this, [[0, 11]]);
}

// 執行
var g = gen();
// result.value 為 readFileAsync 回傳的 Promise

g.next().value.then(function (data1) {
  return g.next(data1).value;
}).then(function (data2) {
  return g.next(data2);
})['catch'](function (err) {
  g['throw'](err);
});
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/js543/transpiled/generator/multi_async_read.js.map