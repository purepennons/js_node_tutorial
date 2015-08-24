var fs = require('fs');

fs.readFile('file1', function(err, data1) {
  if(err) return;
  console.log('file1', data1.toString());
  fs.readFile('file2', function(err, data2) {
    if(err) return;
    console.log('file2', data2.toString());
  })
});
