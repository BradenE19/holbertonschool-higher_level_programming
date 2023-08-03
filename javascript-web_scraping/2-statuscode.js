#!/usr/bin/node
const request = require('request');
const argv = process.argv;

request(argv[2], function (response) {
  console.log('statusCode:', response && response.statusCode);
});