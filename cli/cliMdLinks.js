const process = require('process');
const mdLinks = require('./index.js');


const path = process.argv[2];
const validation= process.argv[3];
const statistics = process.argv[4];
mdLinks(path);

/* if (validation === '--validation' && statistics === '--statistics'){
	console.log(mdLinks(path));
} else if (validation === '--validation' && statistics === 'undefined'){
	console.log(mdLinks(path))
}else{

} */
