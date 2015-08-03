'use strict';

var write = require('./');
var test = require('tape');

var output = '';

process.stdout.write = (function(callback) {
    return function(string, encoding, fd) {
        callback.apply(process.stdout, arguments)
    }
})(process.stdout.write);

//write('foo' + Math.random() * 42);


