const color = require('colors');

const depuringUrl = (urlArry) => {
	for (let i = 0; i < urlArry.length; i++) {
		const cleaningLinks = urlArry[i].indexOf(')');
		if (cleaningLinks !== -1) {
			urlArry[i] = urlArry[i].slice(0, cleaningLinks);
			//url[i]=onlyLinks;
		}

	}
return urlArry;

}
module.exports = depuringUrl;