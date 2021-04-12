const peticionFetch = require('./peticionFetch');
const color = require('colors');

module.exports=statistics =(urlArray)=>{
//	console.log(urlArray);

	if(process.argv.includes('--validate')){
		const linksValidos = [];
		const linksInvalidos = [];
		let linkValidated = [];

		urlArray.forEach(element => {

		linkValidated.push(peticionFetch(element));
	  });

		Promise.all(linkValidated)
			.then(link => {
				link.forEach(element=>{
				console.log(element.text == 'OK' ? color.green(element.url, element.text, element.status) : color.red(element.url, element.text, element.status));
				});
				if (process.argv.includes('--stats')) {
					link.forEach(element => {
						//console.log(element.url, element.text, element.status);
						if (element.status === 200) {
							linksValidos.push(element);
						} else if (element.status > 200) {
							linksInvalidos.push(element);
						}
					});
						const validos = "Links Validos: " + linksValidos.length;
						const invalidos = "Links Invalidos: " + linksInvalidos.length
						console.log(color.yellow("Total de Links",link.length));
						console.log(color.yellow(validos));
						console.log(color.yellow(invalidos));
				}



			});

	}else{
		urlArray.forEach(element =>{
			console.log(color.magenta(element));
		})
		if (process.argv.includes('--stats')) {
			console.log(color.yellow('Links Totales: ' + urlArray.length));
		}
	}
	}
