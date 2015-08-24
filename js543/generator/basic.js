function* gen(x) {
  var y = yield x + 10;
  return y;
}

var g = gen(20);

var result = g.next();
console.log(result);  // { value: 30, done: false }
var end = g.next(50);
console.log(end); // { value: 50, done: true }
