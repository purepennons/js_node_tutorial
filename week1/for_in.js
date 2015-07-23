var obj = {
  a: 10,
  b: 20,
  c: 30
};

for(var prop in obj) {
  console.log('key: %s, val: %s', prop, obj[prop]);
}
/*
    key: a, val: 10
    key: b, val: 20
    key: c, val: 30
 */
