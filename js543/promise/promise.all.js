var fs = require('fs');

var readFileAsync = function(file) {
  return new Promise( function(resolve, reject) {
    fs.readFile(file, function(err, data) {
      if(err) return reject(err); // error
      return resolve(data.toString()); // fulfill
    });
  });
}

function main() {
  return Promise.all([
                      readFileAsync('file1'),
                      readFileAsync('file2')
                    ]);
}

main()
.then( function(result) {
  console.log(result);
})
.catch( function(err) {

});
