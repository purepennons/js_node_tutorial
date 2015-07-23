// 函數宣告
function f1(a, b) {
  return a + b;
}

// 函數實字
var f2 = function() {
  var c = 10;
  console.log(c); // 10
}

var f3 = function f3() {
  console.log(arguments); // { '0': 1, '1': 2 }
  return arguments[0] + arguments[1];
}

console.log(f1(1, 2));  // 3
f2();
console.log(f3(2, 4));  // 6

// 立即函數 & 匿名函數
(function() {
  console.log('immediately'); // immediately
})();
