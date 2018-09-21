const chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const fs = require('file-system');
const path = require('path');
const validateCss = require('css-validator');
const file = 'index.css';
const css = fs.readFileSync(path.resolve(__dirname, '..', file), 'utf-8');

describe('index.css', () => {
	it('is a valid CSS document', () => {
		return expect(
			new Promise(resolve => {
				let results;
				validateCss(css, (err, data) => {
					data.validity
						? resolve(data.validity)
						: resolve(
								`Invalid CSS on line ${data.errors[0].line}: ${
									data.errors[0].errortype
								}`
						  );
				});
			})
		).to.eventually.equal(true);
	});
});

// Note: The \s* you see in errors is regex for any spaces or new lines, any amount of times
// [\S\s]* is for any characters any amount of times (to ignore property values, semi-colons, etc...)
describe('index.css', () => {
	describe('.main rule-set', () => {
		let classSection;

		before(() => {
			let match = css.match(/.main {[\S\s]*}/);
			try {
				classSection = css.slice(
					match['index'],
					match['index'] + match[0].length
				);
			} catch {}
		});

		it(`is present`, () => {
			expect(css, `.main rules-set was not found in ${file}`).to.match(
				/\.main {[\S\s]*}/
			);
		});

		it(`has a font-family property`, () => {
			expect(
				classSection,
				`.main rule-set does not have a font-family property`
			).to.include('font-family');
		});

		it(`has a font-size property`, () => {
			expect(
				classSection,
				`.main rule-set does not have a font-family property`
			).to.include('font-size');
		});
	});

	describe('.centerText rule-set', () => {
		let classSection;
		let match;

		before(() => {
			let match = css.match(/.centerText {[\S\s]*}/);
			try {
				classSection = css.slice(
					match['index'],
					match['index'] + match[0].length
				);
			} catch {}
		});

		it(`is present`, () => {
			expect(css, `.centerText rules-set was not found in ${file}`).to.match(
				/\.centerText {[\S\s]*}/
			);
		});

		it(`has a text-align property`, () => {
			expect(
				classSection,
				`.centerText rule-set does not have a text-align property`
			).to.include('text-align');
		});

		it(`has a height property`, () => {
			expect(
				classSection,
				`.centerText rule-set does not have a height property`
			).to.include('height');
		});

		it(`has a line-height property`, () => {
			expect(
				classSection,
				`.centerText rule-set does not have a line-height property`
			).to.include('line-height');
		});
	});

	describe('#title rule-set', () => {
		let classSection;
		let match;

		before(() => {
			let match = css.match(/#title {[\S\s]*}/);
			try {
				classSection = css.slice(
					match['index'],
					match['index'] + match[0].length
				);
			} catch {}
		});

		it(`is present`, () => {
			expect(css, `#title rules-set was not found in ${file}`).to.match(
				/#title {[\S\s]*}/
			);
		});

		it(`has a font property`, () => {
			expect(
				classSection,
				`#title rule-set does not have a font property`
			).to.include('font');
		});

		it(`has a text-align property`, () => {
			expect(
				classSection,
				`#title rule-set does not have a text-align property`
			).to.include('text-align');
		});

		it(`has a text-decoration property`, () => {
			expect(
				classSection,
				`#title rule-set does not have a text-decoration property`
			).to.include('text-decoration');
		});
	});

	describe('img rule-set', () => {
		let classSection;
		let match;

		before(() => {
			let match = css.match(/img {[\S\s]*}/);
			try {
				classSection = css.slice(
					match['index'],
					match['index'] + match[0].length
				);
			} catch {}
		});

		it(`is present`, () => {
			expect(css, `img rules-set was not found in ${file}`).to.match(
				/img {[\S\s]*}/
			);
		});

		it(`has a display property`, () => {
			expect(
				classSection,
				`img rule-set does not have a display property`
			).to.include('display');
		});

		it(`has a margin-left property`, () => {
			expect(
				classSection,
				`img rule-set does not have a margin-left property`
			).to.include('margin-left');
		});

		it(`has a margin-right property`, () => {
			expect(
				classSection,
				`img rule-set does not have margin-right property`
			).to.include('margin-right');
		});

		it(`has a width property`, () => {
			expect(
				classSection,
				`img rule-set does not have a width property`
			).to.include('width');
		});
	});

	describe('div img rule-set', () => {
		let classSection;
		let match;

		before(() => {
			let match = css.match(/div img {[\S\s]*}/);
			try {
				classSection = css.slice(
					match['index'],
					match['index'] + match[0].length
				);
			} catch {}
		});

		it(`is present`, () => {
			expect(css, `div img rule-set was not found in ${file}`).to.match(
				/div img {[\S\s]*}/
			);
		});

		it(`has a border property`, () => {
			expect(
				classSection,
				`div img rule-set does not have a border property`
			).to.include('border');
		});
	});

	describe('a rule-set', () => {
		let classSection;
		let match;

		before(() => {
			let match = css.match(/a {[\S\s]*}/);
			try {
				classSection = css.slice(
					match['index'],
					match['index'] + match[0].length
				);
			} catch {}
		});

		it(`is present`, () => {
			expect(css, `'a' rule-set was not found in ${file}`).to.match(
				/a {[\S\s]*}/
			);
		});

		it(`has a text-decoration property`, () => {
			expect(
				classSection,
				`'a' rule-set does not have a text-decoration property`
			).to.include('text-decoration');
		});

		it(`has a color property`, () => {
			expect(
				classSection,
				`'a' rule-set does not have a color property`
			).to.include('color');
		});
	});

	describe('a:hover rule-set', () => {
		let classSection;
		let match;

		before(() => {
			let match = css.match(/a:hover {[\S\s]*}/);
			try {
				classSection = css.slice(
					match['index'],
					match['index'] + match[0].length
				);
			} catch {}
		});

		it(`is present`, () => {
			expect(css, `a:hover rule-set was not found in ${file}`).to.match(
				/a:hover {[\S\s]*}/
			);
		});

		it(`has a text-shadow property`, () => {
			expect(
				classSection,
				`a:hover rule-set does not have a text-shadow property`
			).to.include('text-shadow');
		});

		it(`has a font-weight property`, () => {
			expect(
				classSection,
				`a:hover rule-set does not have a font-weight property`
			).to.include('font-weight');
		});
	});

	describe('span, p rule-set', () => {
		let classSection;
		let match;

		before(() => {
			let match = css.match(/(p,\s*span|span,\s*p) {[\S\s]*}/);
			try {
				classSection = css.slice(
					match['index'],
					match['index'] + match[0].length
				);
			} catch {}
		});

		it(`is present`, () => {
			expect(css, `span, p rule-set was not found in ${file}`).to.match(
				/(p,\s*span|span,\s*p) {[\S\s]*}/
			);
		});

		it(`has a font-style property`, () => {
			expect(
				classSection,
				`span, p rule-set does not have a font-style property`
			).to.include('font-style');
		});

		it(`has a left property`, () => {
			expect(
				classSection,
				`span, p rule-set does not have a left property`
			).to.include('left');
		});
	});

	describe('section * rule-set', () => {
		let classSection;
		let match;

		before(() => {
			let match = css.match(/section \* {[\S\s]*}/);
			try {
				classSection = css.slice(
					match['index'],
					match['index'] + match[0].length
				);
			} catch {}
		});

		it(`is present`, () => {
			expect(css, `section * rule-set was not found in ${file}`).to.match(
				/section \* {[\S\s]*}/
			);
		});

		it(`has a visibility property`, () => {
			expect(
				classSection,
				`section * rule-set does not have a visibility property`
			).to.include('visibility');
		});

		it(`has a opacity property`, () => {
			expect(
				classSection,
				`section * rule-set does not have a opacity property`
			).to.include('opacity');
		});
	});
});
