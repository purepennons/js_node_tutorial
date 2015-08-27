// co
'use strict';

var marked0$0 = [gen].map(regeneratorRuntime.mark);
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var co = require('co');

function gen() {
  var data1, data2, data3;
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
        data2 = context$1$0.sent;

        console.log('result2', data2.toString());
        context$1$0.next = 11;
        return fs.readFileAsync('file3');

      case 11:
        data3 = context$1$0.sent;

        console.log('result2', data3.toString());
        context$1$0.next = 18;
        break;

      case 15:
        context$1$0.prev = 15;
        context$1$0.t0 = context$1$0['catch'](0);

        console.error('居然抓的到！！', context$1$0.t0);

      case 18:
        return context$1$0.abrupt('return', 'finish');

      case 19:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this, [[0, 15]]);
}

// run
co(gen).then(function (result) {
  console.log(result);
})['catch'](function (err) {
  console.error(err);
});
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/js543/transpiled/generator/co.js.map