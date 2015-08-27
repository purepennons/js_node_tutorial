// co_parallel_object
'use strict';

var marked0$0 = [gen].map(regeneratorRuntime.mark);
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var co = require('co');

function gen() {
  var result;
  return regeneratorRuntime.wrap(function gen$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.prev = 0;
        context$1$0.next = 3;
        return {
          a: fs.readFileAsync('file1'),
          b: fs.readFileAsync('file2'),
          c: fs.readFileAsync('file3')
        };

      case 3:
        result = context$1$0.sent;

        console.log('resul1', result.a.toString());
        console.log('resul2', result.b.toString());
        console.log('resul3', result.c.toString());
        context$1$0.next = 12;
        break;

      case 9:
        context$1$0.prev = 9;
        context$1$0.t0 = context$1$0['catch'](0);

        console.error('居然抓的到！！', context$1$0.t0);

      case 12:
        return context$1$0.abrupt('return', 'finish');

      case 13:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this, [[0, 9]]);
}

// run
co(gen).then(function (result) {
  console.log(result);
})['catch'](function (err) {
  console.error(err);
});
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/js543/transpiled/generator/co_parallel_object.js.map