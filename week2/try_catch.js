var str = '{"a":10,"b":20}';
try {
  var json = JSON.parse(str);
  console.log(json);
} catch(err) {
  throw err;
}
