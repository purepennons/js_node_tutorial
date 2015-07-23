var obj1 = {};
var obj2 = new Object();
var obj3 = {
  a: 10,
  b: 20
};

obj1.a = 10;
obj1.b = 20;

obj2.a = 10;
obj2.b = 20;

console.log('obj1.a', obj1.a);
console.log('obj2.a', obj2['a']);
var char = 'a';
console.log('obj3.a', obj3[char]);

Object.keys(obj1) // [ 'a', 'b' ]
