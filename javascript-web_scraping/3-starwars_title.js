#!/usr/bin/node
const request = require('request');
const argv = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/';

request(url + argv, function (error, response, body) {
  if (error) {
    console.error(error);
  }
  console.log(JSON.parse(body).title);
});
