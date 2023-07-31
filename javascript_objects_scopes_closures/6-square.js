#!/usr/bin/node
const SquareClass = require('./5-square.js');

class Square extends SquareClass {
  constructor (size) {
    super(size);
    this.size = size;
  }

  charPrint(c) {
    if (typeof c === 'undefined')
    c = 'X';
  }
};