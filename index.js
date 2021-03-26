const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const { ok } = require('assert');
/*FUNCTION READ FILES */
const readArchives = (archive) => {
	fs.readFile(archive, 'utf8', (error, archiveData) => {
		if (error) {
			console.log(`Error function readArchive ${error}`);
		} else {
			getLinks(archiveData);
		}
	});
}

const readDirectiry = (archive) => {
	fs.readdir(archive, (error, files) => {
		if (error) {
		} else {
			files.forEach((doc) => {
				const extNamePath = path.extname(doc);
				const newPath = archive + '/' + doc;
				console.log("Path",newPath);
				if (extNamePath === '.md') {
					readArchives(newPath);
				} else if (extNamePath === '') {
					readDirectiry(newPath);
				}
			});
			console.log(files);
		}
	});
}
readDirectiry('./Directorio1');

const getLinks = (archives) => {
	const text = archives.split('\n');
	text.forEach(element => {
		const linksHttp = /http/.test(element);
		const linksHttps = /https/.test(element);
		if (linksHttp == true || linksHttps == true) {
			const urlExpR = /(htt?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
			const urlExtracted = element.match(urlExpR);
			if (urlExtracted) {
				urlExtracted.forEach(url => {
					depuringUrl(url);
				})
			}
		}
	});
}
//
const depuringUrl= (url)=>{
	const cleaningLinks = url.indexOf(')');
	let onlyLinks;
	if (cleaningLinks !== -1) {
		onlyLinks = url.slice(0, cleaningLinks);
		//console.log( onlyLinks);
	} else {
		onlyLinks = url;
		//console.log(onlyLinks);
	}
	peticionFetch(onlyLinks);
}

const peticionFetch = (url)=>{
	 fetch(url)
 .then(response =>{
	 if(response){
		 console.log(url,response.status);
	 }else{
		 console.log(url,response.status);
	 }
 })
 .catch(error => console.log('ERROR',error));
}
