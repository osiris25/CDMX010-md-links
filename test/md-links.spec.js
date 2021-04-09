//const readArchives = require('../readArchives');
const getLinks = require('../getLinks');
const depuringUrl = require('../depuringUrl');
const peticionFetch = require('../peticionFetch');



describe('mdLinks', () => {

 	it('Espero que regrese todos los links ', () => {
			expect(getLinks('[cifrado César](https://en.wikipedia.org/wikyi/Caesar_cipher)'))
				.toEqual(expect.arrayContaining(['https://en.wikipedia.org/wikyi/Caesar_cipher']));
	});

  it('Espero que regrese los links limpios', () => {
		expect(depuringUrl(['https://app.slack.com/client/T0NNB6T0R/C01EEAMNNB0)']))
			.toEqual(expect.arrayContaining(['https://app.slack.com/client/T0NNB6T0R/C01EEAMNNB0']));
  });

	it('Espero que regrese los estatus del link', () => {
		peticionFetch('https://app.slack.com/client/T0NNB6T0R/C01EEAMNNB0')
		.then(value =>{
			expect(value).toEqual(expect.objectContaining({ "status": 200, "statusText": "OK", "url": "https://app.slack.com/client/T0NNB6T0R/C01EEAMNNB0" }));
		});

	});


});
