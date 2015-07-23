"use strict"

var fs = require('fs');

var argv = process.argv;
var fileName1 = argv[2];
var fileName2 = argv[3];

function readSync() {
  console.log('Start - sync.');
  try {
    var file1 = fs.readFileSync(fileName1);
    console.log(file1.toString());
    var file2 = fs.readFileSync(fileName2);
    console.log(file2.toString());
    console.log('End - sync');
  } catch(err) {
    console.error('Error', err);
  }
}

function readAsync() {
  console.log('Start - async.');
  fs.readFile(fileName1, function(err, file1) {
    if(err) return console.error('Error', err);
    console.log(file1.toString());
  });
  fs.readFile(fileName2, function(err, file2) {
    if(err) return console.error('Error', err);
    console.log(file2.toString());
  });
  console.log('End - async');
}

console.log('Sync');
readSync();
console.log('Async');
readAsync();
