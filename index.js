'use strict';

var isNode = 'process' in global;
var print;

if(isNode) {
  print = require('./node');
} else {
  print = require('./phantom');
}

module.exports = print;
