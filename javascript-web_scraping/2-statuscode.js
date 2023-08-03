#!/usr/bin/node
const request = require('request');
const argv = process.argv;

request(argv[2], function (error, response, body) {
  if (error) {
    console.log('error', error);
  }
  console.log('code:', response && response.statusCode);
});
