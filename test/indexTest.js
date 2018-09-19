const chai = require('chai');
const fs = require('file-system');
const path = require('path');
const css = fs.readFileSync(
	path.resolve(__dirname, '..', 'index.css'),
	'utf-8'
);

describe('index.html', () => {
	let body;
	let iframes;

	beforeEach(function() {
		chai.use(require('chai-dom'));
		body = document.querySelector('body');
		iframes = document.querySelectorAll('iframe');
	});

	// 1
	it('contains a `div` with the class "firstContainer" and three nested `p` tags', () => {
		let div = document.querySelector('div.firstContainer');
		expect(div, 'No `div` tag was found with the class "firstContainer"').not.to
			.be.empty;
		expect(div, 'The `div` tag is missing its original child tags')
			.to.have.descendants('p')
			.and.have.lengthOf.at.least(3);
	});

	// 2
	it('contains a `section` with the class "secondContainer" and three nested `span` tags', () => {
		let section = document.querySelector('section.secondContainer');
		expect(
			section,
			'No `section` tag was found with the class "secondContainer"'
		).not.to.be.empty;
		expect(section, 'The `section` tag is missing its original child tags')
			.to.have.descendants('span')
			.and.have.lengthOf.at.least(3);
	});

	// 3
	it('contains a `nav` with the class "navContainer" and three nested `a` tags', () => {
		let nav = document.querySelector('nav.navContainer');
		expect(nav, 'No `nav` tag was found with the class "navContainer"').not.to
			.be.empty;
		expect(nav, 'The `nav` tag is missing its original child tags')
			.to.have.descendants('a')
			.and.have.lengthOf.at.least(3);
	});

	// 4
	it('contains a `form` with the class "formContainer" and two nested `input` tags', () => {
		let form = document.querySelector('form.formContainer');
		expect(form, 'No `form` tag was found with the class "formContainer"').not
			.to.be.empty;
		expect(form, 'The `form` tag is missing its original child tags')
			.to.have.descendants('input')
			.and.have.lengthOf.at.least(2);
	});

	// 5
	it('contains a `header` with the class "headerContainer" and twenty nested `h2` tags', () => {
		let header = document.querySelector('header.headerContainer');
		expect(header, 'No `header` tag was found with the class "headerContainer"')
			.not.to.be.empty;
		expect(header, 'The `header` tag is missing its original child tags')
			.to.have.descendants('h2')
			.and.have.lengthOf.at.least(20);
	});

	// 6
	it('contains a `section` tag with the class "sectionContainer" and four nested `img` tags', () => {
		let section = document.querySelector('section.sectionContainer');
		expect(
			section,
			'No `section` tag was found with the class "sectionContainer"'
		).not.to.be.empty;
		expect(section, 'The `section` tag is missing its original child tags')
			.to.have.descendants('img')
			.and.have.lengthOf.at.least(4);
	});

	// 7
	it('contains a `main` tag with the class "mainContainer" and a nested `section` tag with the class "nestedContainer"', () => {
		let main = document.querySelector('main.mainContainer');
		expect(main, 'No `main` tag was found with the class "mainContainer"').not
			.to.be.empty;
		expect(
			main,
			'No `section` tag with the class "nestedContainer" was found within `main`'
		).to.have.descendant(document.querySelector('section.nestedContainer'));
	});

	// 8
	it('contains an `article` tag with the id "articleContainer" and two nested `figure` tags', () => {
		let article = document.querySelector('article#articleContainer');

		expect(article, 'No `article` tag was found with the id "articleContainer"')
			.not.to.be.empty;
		expect(
			article,
			'No `figure` tags were found within `article`'
		).to.have.descendants('figure');
		expect(article, 'At least 2 `figure` tags should be nested in `article`')
			.to.have.descendants('figure')
			.and.have.lengthOf.at.least(2);
	});

	// 9
	it('contains an `div` tag with the class "divContainer" and three nested `span` tags', () => {
		let div = document.querySelector('div.divContainer');
		expect(div, 'No `div` tag was found with the class "divContainer"').not.to
			.be.empty;
		expect(div, 'No `span` tags were found within `div`').to.have.descendants(
			'span'
		);
		expect(div, 'At least 3 `span` tags should be nested in `div`')
			.to.have.descendants('span')
			.and.have.lengthOf.at.least(3);
	});
});

describe('index.css', () => {
	// 1
	describe(`contains a .firstContainer rule-set`, () => {
		it('.firstContainer exists', () => {
			expect(css, 'index.css is missing a rule-set: .firstContainer').to.match(
				/\.firstContainer {[\S\s]*}/
			);
		});

		it('.firstContainer has the display property set to flex', () => {
			expect(css, '.firstContainer does not have display set to flex').to.match(
				/\.firstContainer {[\S\s]*display: flex[\S\s]*}/
			);
		});
	});

	// 2
	describe(`contains a .secondContainer rule-set`, () => {
		it('.secondContainer exists', () => {
			expect(css, 'index.css is missing a rule-set: .secondContainer').to.match(
				/\.secondContainer {[\S\s]*}/
			);
		});

		it('.secondContainer has the display property set to flex', () => {
			expect(
				css,
				'.secondContainer does not have display set to flex'
			).to.match(/\.secondContainer {[\S\s]*display: flex;[\S\s]*}/);
		});

		it('.secondContainer has the flex-direction property set to column', () => {
			expect(
				css,
				'.secondContainer does not have flex-direction set to column'
			).to.match(/\.secondContainer {[\S\s]*flex-direction: column;[\S\s]*}/);
		});
	});

	// 3
	describe(`contains a .navContainer rule-set`, () => {
		it('.navContainer exists', () => {
			expect(css, 'index.css is missing a rule-set: .navContainer').to.match(
				/\.navContainer {[\S\s]*}/
			);
		});

		it('.navContainer has the display property set to flex', () => {
			expect(css, '.navContainer does not have display set to flex').to.match(
				/\.navContainer {[\S\s]*display: flex;[\S\s]*}/
			);
		});

		it('.navContainer has the flex-direction property set to row-reverse', () => {
			expect(
				css,
				'.navContainer does not have flex-direction set to row-reverse'
			).to.match(/\.navContainer {[\S\s]*flex-direction: row-reverse;[\S\s]*}/);
		});
	});

	// 4
	describe(`contains a .formContainer rule-set`, () => {
		it('.formContainer exists', () => {
			expect(css, 'index.css is missing a rule-set: .formContainer').to.match(
				/\.formContainer {[\S\s]*}/
			);
		});

		it('.formContainer has the display property set to flex', () => {
			expect(css, '.formContainer does not have display set to flex').to.match(
				/\.formContainer {[\S\s]*display: flex;[\S\s]*}/
			);
		});

		it('.formContainer has the flex-direction property set to column-reverse', () => {
			expect(
				css,
				'.formContainer does not have flex-direction set to column-reverse'
			).to.match(
				/\.formContainer {[\S\s]*flex-direction: column-reverse;[\S\s]*}/
			);
		});
	});

	// 5
	describe(`contains a .headerContainer rule-set`, () => {
		it('.headerContainer exists', () => {
			expect(css, 'index.css is missing a rule-set: .headerContainer').to.match(
				/\.headerContainer {[\S\s]*}/
			);
		});

		it('.headerContainer has the display property set to flex', () => {
			expect(
				css,
				'.headerContainer does not have display set to flex'
			).to.match(/\.headerContainer {[\S\s]*display: flex;[\S\s]*}/);
		});

		it('.headerContainer has the flex-direction property set to column-reverse', () => {
			expect(
				css,
				'.headerContainer does not have flex-direction set to column-reverse'
			).to.match(/\.headerContainer {[\S\s]*flex-direction: column;[\S\s]*}/);
		});

		it('.headerContainer has the flex-wrap property set to wrap', () => {
			expect(
				css,
				'.headerContainer does not have flex-wrap property set to wrap'
			).to.match(/\.headerContainer {[\S\s]*flex-wrap: wrap;[\S\s]*}/);
		});

		it('.headerContainer has the height property set to 200px', () => {
			expect(
				css,
				'.headerContainer does not have height property set to 200px'
			).to.match(/\.headerContainer {[\S\s]*height: 200px;[\S\s]*}/);
		});
	});

	// 6
	describe(`contains a .sectionContainer rule-set`, () => {
		it('.sectionContainer exists', () => {
			expect(
				css,
				'index.css is missing a rule-set: .sectionContainer'
			).to.match(/\.sectionContainer {[\S\s]*}/);
		});

		it('.sectionContainer has the display property set to flex', () => {
			expect(
				css,
				'.sectionContainer does not have display set to flex'
			).to.match(/\.sectionContainer {[\S\s]*display: flex;[\S\s]*}/);
		});

		it('.sectionContainer has the flex-flow property set to `row nowrap`', () => {
			expect(
				css,
				'.sectionContainer does not have flex-flow set to `row nowrap`'
			).to.match(/\.sectionContainer {[\S\s]*flex-flow: row nowrap;[\S\s]*}/);
		});
	});

	// 7
	describe(`contains a .mainContainer rule-set`, () => {
		it('.mainContainer exists', () => {
			expect(css, 'index.css is missing a rule-set: .mainContainer').to.match(
				/\.mainContainer {[\S\s]*}/
			);
		});

		it('.mainContainer has the display property set to flex', () => {
			expect(css, '.mainContainer does not have display set to flex').to.match(
				/\.mainContainer {[\S\s]*display: flex;[\S\s]*}/
			);
		});

		it('.mainContainer has the flex-flow property set to `column nowrap`', () => {
			expect(
				css,
				'.mainContainer does not have flex-flow set to `column nowrap`'
			).to.match(/\.mainContainer {[\S\s]*flex-flow: column nowrap;[\S\s]*}/);
		});
	});

	describe(`contains a .nestedContainer rule-set`, () => {
		it('.nestedContainer exists', () => {
			expect(css, 'index.css is missing a rule-set: .nestedContainer').to.match(
				/\.nestedContainer {[\S\s]*}/
			);
		});

		it('.nestedContainer has the display property set to flex', () => {
			expect(
				css,
				'.nestedContainer does not have display set to flex'
			).to.match(/\.nestedContainer {[\S\s]*display: flex;[\S\s]*}/);
		});

		it('.nestedContainer has the flex-flow property set to `row nowrap`', () => {
			expect(
				css,
				'.nestedContainer does not have flex-flow set to `row nowrap`'
			).to.match(/\.nestedContainer {[\S\s]*flex-flow: row nowrap;[\S\s]*}/);
		});
	});

	// 8
	describe(`contains a #articleContainer rule-set`, () => {
		it('#articleContainer exists', () => {
			expect(
				css,
				'index.css is missing a rule-set: #articleContainer'
			).to.match(/\#articleContainer {[\S\s]*}/);
		});

		it('#articleContainer has the display property set to flex', () => {
			expect(
				css,
				'#articleContainer does not have display set to flex'
			).to.match(/\#articleContainer {[\S\s]*display: flex;[\S\s]*}/);
		});

		it('#articleContainer has the flex-flow property set to `row nowrap`', () => {
			expect(
				css,
				'#articleContainer does not have flex-flow set to `row nowrap`'
			).to.match(/\#articleContainer {[\S\s]*flex-flow: row nowrap;[\S\s]*}/);
		});
	});

	describe(`contains a figure rule-set`, () => {
		it('figure exists', () => {
			expect(css, 'index.css is missing a rule-set: figure').to.match(
				/figure {[\S\s]*}/
			);
		});

		it('figure has the display property set to flex', () => {
			expect(css, 'figure does not have display set to flex').to.match(
				/figure {[\S\s]*display: flex;[\S\s]*}/
			);
		});

		it('figure has the flex-flow property set to `column-reverse`', () => {
			expect(
				css,
				'.nestedContainer does not have flex-flow set to `column-reverse`'
			).to.match(/figure {[\S\s]*flex-flow: column-reverse;[\S\s]*}/);
		});
	});

	// 9
	describe(`contains a .divContainer rule-set`, () => {
		it('.divContainer exists', () => {
			expect(css, 'index.css is missing a rule-set: .divContainer').to.match(
				/\.divContainer {[\S\s]*}/
			);
		});

		it('.divContainer has the display property set to flex', () => {
			expect(css, '.divContainer does not have display set to flex').to.match(
				/\.divContainer {[\S\s]*display: flex;[\S\s]*}/
			);
		});

		it('.divContainer has the flex-flow property set to `row-reverse`', () => {
			expect(
				css,
				'.divContainer does not have flex-flow set to `row-reverse`'
			).to.match(/\.divContainer {[\S\s]*flex-flow: row-reverse;[\S\s]*}/);
		});
	});

	describe('contains a `.divContainer span` rule-set', () => {
		it('`.divContainer span` exists', () => {
			expect(
				css,
				'index.css is missing a rule-set: .divContainer span'
			).to.match(/\.divContainer span {[\S\s]*}/);
		});

		it('`.divContainer span` has the display property set to flex', () => {
			expect(
				css,
				'`.divContainer span` does not have display set to flex'
			).to.match(/\.divContainer span {[\S\s]*display: flex;[\S\s]*}/);
		});

		it('`.divContainer span` has the flex-flow property set to `column-reverse`', () => {
			expect(
				css,
				'`.divContainer span` does not have flex-flow set to `column-reverse`'
			).to.match(
				/\.divContainer span {[\S\s]*flex-flow: column-reverse;[\S\s]*}/
			);
		});
	});

	// 10
	describe(`contains a body rule-set`, () => {
		it('body exists', () => {
			expect(css, 'index.css is missing a rule-set: body').to.match(
				/body {[\S\s]*}/
			);
		});

		it('body has the display property set to flex', () => {
			expect(css, 'body does not have display set to flex').to.match(
				/body {[\S\s]*display: flex;[\S\s]*}/
			);
		});

		it('body has the flex-flow property set to `column-reverse`', () => {
			expect(
				css,
				'body does not have flex-flow set to `column-reverse`'
			).to.match(/body {[\S\s]*flex-flow: column-reverse;[\S\s]*}/);
		});
	});
});
