const fs = require('fs');
const path = require('path');
const markdownIt = require('markdown-it');

/*FUNCTION READ FILES */
const readArchives = (archive) =>{
	fs.readFile(archive, 'utf8', (error,archiveData)=>{

			if(error){
			console.log(`Error function readArchive ${error}`);
		}else{
				getLinks(archiveData);
		}
	});

}

const readDirectiry = (archive) =>{
	fs.readdir(archive,(error,files)=>{
		if(error){
		}else{
			files.forEach((doc)=>{
				const extNamePath = path.extname(doc);
				const newPath = archive + '/' + doc;
				if (extNamePath == '.md') {
			 	readArchives(newPath);
				}else if ( extNamePath == '' ){
					readDirectiry(newPath);
				}
			});
			console.log(files);
		}
	});
}
readDirectiry('./Directorio1');

const getLinks = (archives) =>{

			const text = archives.split('\n');
			text.forEach(element => {
				const linksHttp=/http/.test(element);
				const linksHttps = /https/.test(element);
				if (linksHttp === true || linksHttps=== true){

				 console.log("Http",linksHttp, element);
					console.log("Https", linksHttps, element);
				}


			});
}
