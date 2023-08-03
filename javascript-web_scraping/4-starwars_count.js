#!/usr/bin/node
const request = require('request');
const argv = process.argv[2];
const url = "https://swapi-api.hbtn.io/api/films/"

request(url, function (error, response, body) {
    if (error) {
      console.error(error);
    } else {
      let jso = JSON.parse(body);
    let results = jso['results'];
    let count = 0;
    for (let i = 0; i < results.length; i++) {
      let chars = (results[i]['characters']);
      for (let j = 0; j < chars.length; j++) {
        let check18 = chars[j].endsWith('18/');
        if (check18) {
          count++;
        }
      }
    }
    console.log(count);
  }
});