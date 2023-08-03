#!/usr/bin/node
const request = require('request');
const argv = process.argv;

request(argv[2], function (error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});