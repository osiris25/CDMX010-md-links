#!/usr/bin/env node

const process = require('process');
const mdLinks = require('./index.js');
const argPath = process.argv[2];
mdLinks(argPath);
//console.log(argPath);
