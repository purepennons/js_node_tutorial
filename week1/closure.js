// function external() {
//   var x = 10;
//   function internal() {
//     x += 20;
//     console.log(x);
//   }
//   internal();
// }
//
// external();

function external() {
  var x = 10;

  return function(y) {
    return x + y;
  }

}

var inter = external();
console.log(inter(20)); // 30
console.log(inter(30)); // 40

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
