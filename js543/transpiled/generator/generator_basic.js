"use strict";

var marked0$0 = [gen].map(regeneratorRuntime.mark);
function gen(x) {
  var y;
  return regeneratorRuntime.wrap(function gen$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return x + 10;

      case 2:
        y = context$1$0.sent;
        return context$1$0.abrupt("return", y);

      case 4:
      case "end":
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

var g = gen(20);

var result = g.next();
console.log(result); // { value: 30, done: false }
var end = g.next(50);
console.log(end); // { value: 50, done: true }
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/js543/transpiled/generator/generator_basic.js.map