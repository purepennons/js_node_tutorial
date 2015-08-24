var fs = require('fs');
function readFile(callback) {
  fs.readFile('file1', function(err, result) {
    if(err) return callback(err);
    callback(null, result);
  });
}

readFile(function(err, result) {
  if(err) throw err;
  console.log(result.toString());
});
