// bluebird promisifyAll
'use strict';

var marked0$0 = [gen].map(regeneratorRuntime.mark);
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

function gen() {
  var data;
  return regeneratorRuntime.wrap(function gen$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return fs.readFileAsync('file1');

      case 3:
        data = context$1$0.sent;

        console.log('result', data.toString());
        context$1$0.next = 10;
        break;

      case 7:
        context$1$0.prev = 7;
        context$1$0.t0 = context$1$0['catch'](0);

        console.error('居然抓的到！！', context$1$0.t0);

      case 10:
        return context$1$0.abrupt('return');

      case 11:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this, [[0, 7]]);
}

// 執行
var g = gen();
// result.value 為 readFileAsync 回傳的 Promise
var result = g.next();
result.value.then(function (data) {
  g.next(data); // 將 result 扔回 generator
})['catch'](function (err) {
  g['throw'](err);
});
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/js543/transpiled/generator/generator_readFile.js.map