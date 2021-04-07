const getLinks = require('./getLinks.js');
const fs = require('fs');
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
module.exports= readArchives;
