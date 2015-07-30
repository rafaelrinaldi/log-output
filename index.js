'use strict';

var isNode = 'process' in global;
var print;

if(isNode) {
  console.log('exporting to node.js');
  print = require('./node');
} else {
  console.log('exporting to phantomjs');
  print = require('./phantom');
}

module.exports = print;
