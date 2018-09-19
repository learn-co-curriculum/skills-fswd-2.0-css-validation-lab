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

	// 10
});
