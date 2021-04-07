const color = require('colors');
const fetch = require('node-fetch');

let links = {};
//console.log(links)
const peticionFetch = (url) => {
	//console.log(color.zebra(url));
 const fetchP = fetch(url)
		.then(response => {
			//console.log(response);
			links={status: response.status, text: response.statusText, url: url};
		//	console.log(links);

			/* const linksValidos = [];
			const linksInvalidos = [];
			links.forEach(element => {
				if (element.status === 200) {
					linksValidos.push(element);

				} else if (element.status > 200) {
					linksInvalidos.push(element);

				}

			});
			console.log(color.green(linksValidos.length));
			console.log(color.red(linksInvalidos.length)); */
			return links
		})
		.catch(error =>
			console.log(color.red(error,{ status: 404, text: 'FAIL', url: url }))
			);

	return fetchP;

}
module.exports=peticionFetch;