#!/usr/bin/env node

const process = require('process');
const mdLinks = require('./index.js');
const argPath = process.argv[2];
const validation = process.argv[3];
const statistics = process.argv[4];
mdLinks(argPath);
console.log(argPath);



/* if (validation === '--validation' && statistics === '--statistics'){
	console.log(mdLinks(path));
} else if (validation === '--validation' && statistics === 'undefined'){
	console.log(mdLinks(path))
}else{

} */
