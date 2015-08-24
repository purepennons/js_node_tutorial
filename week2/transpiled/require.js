// native module
'use strict';

var fs = require('fs');

// module from lib
var Promise = require('bluebird');

// module from external file
var obj = require('./exports.js');
var b = require('./exports').b;
var config = require('./config/config.json');

var fun = require('/Users/PureWind/Documents/githubProject/summer_js/week2/module.exports.js')(666);

console.log('obj', obj);
console.log('obj.b', b);
obj.c();
console.log('json', config);
fun();
//# sourceMappingURL=/Users/PureWind/Documents/githubProject/summer_js/week2/transpiled/require.js.map