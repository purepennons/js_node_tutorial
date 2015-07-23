var arr1 = [];
var arr2 = new Array();
var arr3 = [10, "20", false];

arr3.push(3.14);
console.log(arr3);  // [ 10, '20', false, 3.14 ]
console.log('length', arr3.length); // length 4

console.log(arr3.pop());  // 3.14
console.log('length', arr3.length); // length 3
