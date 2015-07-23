function compute(a, b, callback) {
  return callback(a, b);
}

function multiplyCallback(num1, num2) {
  var result = num1 * num2;
  console.log('multiply = ', result);
}

// exec
compute(10, 20, function add(num1, num2) {
  var result = num1 + num2;
  console.log('sum = ', result);
}); // 30

compute(10, 20, multiplyCallback);  // 200
