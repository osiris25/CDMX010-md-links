const getLinks = require('./getLinks.js');
const statistics = require('./statistics.js');
const fs = require('fs');
/*FUNCTION READ FILES */
const readArchives = (archive) => {
		return	fs.readFile(archive, 'utf8', (error, archiveData) => {
			if (error) {
				console.log(`Error function readArchive ${error}`);
			} else {
				const okLinks = getLinks(archiveData);
				statistics(okLinks);

			}

		});
}
module.exports= readArchives;
