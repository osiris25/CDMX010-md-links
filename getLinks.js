const depuringUrl = require('./depuringUrl.js');
const getLinks = (archives) => {

			const expR = /(htt?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
				const expresion = new RegExp(expR)
				const urlExtractedMatch =archives.match(expresion);
				//console.log(urlExtractedMatch);
			if (urlExtractedMatch) {
				return depuringUrl(urlExtractedMatch);
				}


}

module.exports=getLinks;