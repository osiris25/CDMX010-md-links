const color = require('colors');
const fetch = require('node-fetch');

let links = {};
//console.log(links)
const peticionFetch = (url) => {
	//console.log(color.zebra(url));
 const fetchP = fetch(url)
		.then(response => {
			links={status: response.status, text: response.statusText, url: url};
			return links
		})
		.catch(error =>
			console.log(color.red(error,{ status: 404, text: 'FAIL', url: url }))
			);

	return fetchP;

}
module.exports=peticionFetch;