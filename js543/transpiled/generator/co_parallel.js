// co_parallel_array
'use strict';

var marked0$0 = [gen].map(regeneratorRuntime.mark);
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var co = require('co');

function gen() {
  var p1, p2, p3, result;
  return regeneratorRuntime.wrap(function gen$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        p1 = fs.readFileAsync('file1');
        p2 = fs.readFileAsync('file2');
        p3 = fs.readFileAsync('file3');
        context$1$0.next = 6;
        return [p1, p2, p3];

      case 6:
        result = context$1$0.sent;

        console.log('resul1', result[0].toString());
        console.log('resul2', result[1].toString());
        console.log('resul3', result[2].toString());
        context$1$0.next = 15;
        break;

      case 12:
        context$1$0.prev = 12;
        context$1$0.t0 = context$1$0['catch'](0);

        console.error('居然抓的到！！', context$1$0.t0);

      case 15:
        return context$1$0.abrupt('return', 'finish');

      case 16:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this, [[0, 12]]);
}

// run
co(gen).then(function (result) {
  console.log(result);
})['catch'](function (err) {
  console.error(err);
});
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/js543/transpiled/generator/co_parallel.js.map