require('debug').enable('');
var debug = require('debug')('DEBUG');
var func = require('./debug2.js');

debug('Debug', 'message');
func();
