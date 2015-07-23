require('debug').enable('DEBUG DEBUG2');
var debug = require('debug')('DEBUG');
var func = require('./debug2.js');

debug('Debug', 'message');
func();
