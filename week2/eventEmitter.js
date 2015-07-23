var fs = require('fs');
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// 監聽特定事件
emitter.on('error', function(err) {
  console.error('Error', err);
});

emitter.once('success', function(result1, result2) {
  console.log('Result', [result1, result2]);
});

emitter.addListener('whatever', whateverCallback);

function whateverCallback(thing) {
  console.log('Something', thing.toString());
}

var argv = process.argv;
var fileName1 = argv[2];
var fileName2 = argv[3];

function readFile() {
  fs.readFile(fileName1, function(err, result1) {

    if(err) return emitter.emit('error', err);
    emitter.emit('whatever', result1);
    emitter.emit('whatever', result1);

    fs.readFile(fileName2, function(err, result2) {

      if(err) return emitter.emit('error', err);
      emitter.emit('success', result1, result2);
      emitter.emit('success', result1, result2);
      emitter.removeListener('whatever', whateverCallback);
      emitter.emit('whatever', result1);

    })
  });
}

readFile();
