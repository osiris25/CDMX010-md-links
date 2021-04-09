
const readArchives = require('./readArchives');
const fs = require('fs');
const path = require('path');

 const mdLinks = (archive) => {
	fs.readdir(archive, (error, files) => {
		if (error) {
		} else {
			files.forEach((doc) => {
				const extNamePath = path.extname(doc);
				const newPath = archive + '/' + doc;
				//console.log("Path", newPath);
				if (extNamePath === '.md') {
					readArchives(newPath);
				} else if (extNamePath === '') {
					mdLinks(newPath);
				}
			});
			console.log(files);
		}
	});
}
module.exports=mdLinks;
