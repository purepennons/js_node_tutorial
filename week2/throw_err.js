fs.readFile(function(err, result) {
  if(err) throw err;
  console.log(result.toString());
});
