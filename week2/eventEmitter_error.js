var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var emitter = new EventEmitter();

emitter.on('error', function(err) {
  console.error('Error', err);
});

fs.readFile('file1', function(err, result) {
  if(err) return emitter.emit('error', err);
})

fs.readFile('file2', function(err, result) {
  if(err) return emitter.emit('error', err);
})
