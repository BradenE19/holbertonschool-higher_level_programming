#!/usr/bin/node
const fs = require('fs');
const argv = process.argv[2];
const request = require('request');
const url = "https://jsonplaceholder.typicode.com/todos"

request(url, function(error, response, body) {
    if (error) {
        console.log('error', error);
    } else {
        let todos = JSON.parse(body);
        let dash = {};
        for (let i = 0; i < todos.length; i++) {
            let status = (todos[i]['completed']);
            let key = todos[i]['userId'].toString();
            if (status) {
                if (dash[key]) {
                    dash[key]++;
                } else {
                    dash[key] = 1;
                }
            }
        }
        console.log(dash);
    }
});