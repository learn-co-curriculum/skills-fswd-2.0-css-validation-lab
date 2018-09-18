const chai = require('chai');

describe('index.html', () => {
	let body;
	let iframes;

	beforeEach(function() {
		chai.use(require('chai-dom'));
		body = document.querySelector('body');
		iframes = document.querySelectorAll('iframe');
	});

	it('contains at least one iframe', () => {
		expect(iframes, 'No `iframe` tags were found inside `body`').not.to.be
			.empty;
	});

	// 1
	it('contains an `iframe` with no attributes', () => {
		let iframe = Array.prototype.find.call(iframes, i => i.src === '');

		expect(
			iframe,
			'An iframe without any attributes was not found'
		).not.to.have.attr('src');
	});

	// 2
	it('contains an `iframe` with a src set to "https://www.warnerbros.com/archive/spacejam/movie/jam.htm"', () => {
		let iframe = Array.prototype.find.call(
			iframes,
			i => i.src === 'https://www.warnerbros.com/archive/spacejam/movie/jam.htm'
		);
		expect(
			iframe,
			'An iframe with src set to "https://www.warnerbros.com/archive/spacejam/movie/jam.htm" was not found'
		).to.have.attribute(
			'src',
			'https://www.warnerbros.com/archive/spacejam/movie/jam.htm'
		);
	});

	// 3
	it('contains an `iframe` with src set to "https://web.archive.org/web/19981202230410/http://www.google.com:80/"', () => {
		let iframe = Array.prototype.find.call(
			iframes,
			i =>
				i.src ===
				'https://web.archive.org/web/19981202230410/http://www.google.com:80/'
		);
		expect(
			iframe,
			'An iframe with src set to "https://web.archive.org/web/19981202230410/http://www.google.com:80/" was not found'
		).to.have.attribute(
			'src',
			'https://web.archive.org/web/19981202230410/http://www.google.com:80/'
		);
	});

	// 4
	it('contains an `iframe` with height set to "200px" and src set to "https://www.bing.com/"', () => {
		let iframe = Array.prototype.find.call(
			iframes,
			i => i.src === 'https://www.bing.com/'
		);
		expect(
			iframe,
			'An iframe with src set to "https://www.bing.com/" was not found'
		).to.have.attribute('src', 'https://www.bing.com/');
		expect(
			iframe,
			'An iframe with src set to "https://www.bing.com/" is set to the incorrect height'
		).to.have.attribute('height', '200px');
	});

	// 5
	it('contains an `iframe` with width set to "400px" and src set to "https://whoishiring.io/"', () => {
		let iframe = Array.prototype.find.call(
			iframes,
			i => i.src === 'https://whoishiring.io/'
		);
		expect(
			iframe,
			'An iframe with src set to "https://whoishiring.io/" was not found'
		).to.have.attribute('src', 'https://whoishiring.io/');
		expect(
			iframe,
			'An iframe with src set to "https://whoishiring.io/" is set to the incorrect width'
		).to.have.attribute('width', '400px');
	});

	// 6
	it('contains an `iframe` with width and height set to "400px" and src set to "https://www.mapquest.com/"', () => {
		let iframe = Array.prototype.find.call(
			iframes,
			i => i.src === 'https://www.mapquest.com/'
		);
		expect(
			iframe,
			'An iframe with src set to "https://www.mapquest.com/" was not found'
		).to.have.attribute('src', 'https://www.mapquest.com/');
		expect(
			iframe,
			'An iframe with src set to "https://www.mapquest.com/" is set to the incorrect width'
		).to.have.attribute('width', '400px');
		expect(
			iframe,
			'An iframe with src set to "https://www.mapquest.com/" is set to the incorrect height'
		).to.have.attribute('height', '400px');
	});

	// 7
	it('contains an `iframe` with width set to "600px", height set to "300px", and src set to "https://imgs.xkcd.com/comics/tags.png"', () => {
		let iframe = Array.prototype.find.call(
			iframes,
			i => i.src === 'https://imgs.xkcd.com/comics/tags.png'
		);
		expect(
			iframe,
			'An iframe with src set to "https://imgs.xkcd.com/comics/tags.png" was not found'
		).to.have.attribute('src', 'https://imgs.xkcd.com/comics/tags.png');
		expect(
			iframe,
			'An iframe with src set to "https://imgs.xkcd.com/comics/tags.png" is set to the incorrect width'
		).to.have.attribute('width', '600px');
		expect(
			iframe,
			'An iframe with src set to "https://imgs.xkcd.com/comics/tags.png" is set to the incorrect height'
		).to.have.attribute('height', '300px');
	});

	// 8
	it('contains an `iframe` with a name attribute set to "html5", width set to "100%", height set to "400px", and src set to "https://dev.w3.org/html5/html-author/"', () => {
		let iframe = Array.prototype.find.call(
			iframes,
			i => i.src === 'https://dev.w3.org/html5/html-author/'
		);
		expect(
			iframe,
			'An iframe with src set to "https://dev.w3.org/html5/html-author/" was not found'
		).to.have.attribute('src', 'https://dev.w3.org/html5/html-author/');
		expect(
			iframe,
			'An iframe with src set to "https://dev.w3.org/html5/html-author/" is set to the incorrect width'
		).to.have.attribute('width', '100%');
		expect(
			iframe,
			'An iframe with src set to "https://dev.w3.org/html5/html-author/" is set to the incorrect height'
		).to.have.attribute('height', '400px');
		expect(
			iframe,
			'An iframe with src set to "https://dev.w3.org/html5/html-author/" should have a name attribute set to "html5"'
		).to.have.attribute('name', 'html5');
	});

	// 9
	it('contains an `iframe` with name set to "wikipedia", width set to "49%", height set to "200px", and src set to "https://www.wikipedia.org/"', () => {
		let iframe = Array.prototype.find.call(
			iframes,
			i => i.src === 'https://www.wikipedia.org/'
		);
		expect(
			iframe,
			'An iframe with src set to "https://www.wikipedia.org/" was not found'
		).to.have.attribute('src', 'https://www.wikipedia.org/');
		expect(
			iframe,
			'An iframe with src set to "https://www.wikipedia.org/" is set to the incorrect width'
		).to.have.attribute('width', '49%');
		expect(
			iframe,
			'An iframe with src set to "https://www.wikipedia.org/" is set to the incorrect height'
		).to.have.attribute('height', '200px');
		expect(
			iframe,
			'An iframe with src set to "https://www.wikipedia.org/" should have a name attribute set to "wikipedia"'
		).to.have.attribute('name', 'wikipedia');
	});

	// 10
	it('contains an `iframe` with name set to "article", width set to "49%", height set to "400px", and src set to "https://en.wikipedia.org/wiki/HTML"', () => {
		let iframe = Array.prototype.find.call(
			iframes,
			i => i.src === 'https://en.wikipedia.org/wiki/HTML'
		);
		expect(
			iframe,
			'An iframe with src set to "https://en.wikipedia.org/wiki/HTML" was not found'
		).to.have.attribute('src', 'https://en.wikipedia.org/wiki/HTML');
		expect(
			iframe,
			'An iframe with src set to "https://en.wikipedia.org/wiki/HTML" is set to the incorrect width'
		).to.have.attribute('width', '49%');
		expect(
			iframe,
			'An iframe with src set to "https://en.wikipedia.org/wiki/HTML" is set to the incorrect height'
		).to.have.attribute('height', '400px');
		expect(
			iframe,
			'An iframe with src set to "https://en.wikipedia.org/wiki/HTML" should have a name attribute set to "wikipedia"'
		).to.have.attribute('name', 'article');
	});
});
