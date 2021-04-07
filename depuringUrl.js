const peticionFetch = require('./peticionFetch');
const color = require('colors');

const depuringUrl = (urlArry) => {
	for (let i = 0; i < urlArry.length; i++) {
		const cleaningLinks = urlArry[i].indexOf(')');
		if (cleaningLinks !== -1) {
			urlArry[i] = urlArry[i].slice(0, cleaningLinks);
			//url[i]=onlyLinks;
		}
	}
	//console.log(urlArry);
	urlArry.forEach(element => {
		peticionFetch(element);
	});
	//console.log(urlArry);
	const linksValidos = [];
	const linksInvalidos = [];
	let linkValidated = []

	urlArry.forEach(element => {
		linkValidated.push(peticionFetch(element));
	});
	Promise.all(linkValidated)
		.then(link => {
			//clsconsole.log(link);
			link.forEach(element => {
				//console.log(element.url, element.text, element.status);
				if (element.status === 200) {
					linksValidos.push(element);
					console.log(color.green(element.url, element.text,element.status));
				} else if (element.status > 200) {
					linksInvalidos.push(element);
					console.log(color.red(element.url, element.text, element.status));
				}
			});
			const validos = "Links Validos: " + linksValidos.length;
			const invalidos = "Links Invalidos: " + linksInvalidos.length
		//	console.log(color.green(element.url, element.status) );
			console.log(color.underline(validos));
			console.log(color.strikethrough(invalidos));
		});




	//console.log(linkValidated);
}
module.exports = depuringUrl;