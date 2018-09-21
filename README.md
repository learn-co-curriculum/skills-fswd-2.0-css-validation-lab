# Writing Valid CSS Lab

In this lab we’re going to focus on writing the CSS rule-sets.

## Objectives

- Practice writing CSS rule-sets
- Practice writing different CSS selectors
- Practice writing a variety of CSS properties

## Instructions

Work through the problems below one at a time, writing your solutions in
`index.css`. There is no need to write any HTML, but feel free to use
`index.html` while testing out the effects of different CSS properties. Run
`learn` to verify you've written a correct solution for each problem.

#### 1:) Add a Rule-Set for the `body` Element

- Add a margin property to the rule-set

**Side Note:** The `body` element has a default margin of 8px. Setting margin to
`0` is commonly used to override this.

#### 2:) Add a Rule-Set for a `main` Class

- Add font-size and font-family properties to the rule-set

#### 3:) Add a Rule-Set for a `centerText` Class

- Add text-align, height, and line-height properties to the rule-set

**Side Note:** The setting `height` and `line-height` to the same value will
vertically align text. Setting `text-center` to center will horizontally align
text

#### 4:) Add a Rule-Set for a 'title' Id

- Add font, text-align, and text-decoration properties to the rule-set

#### 5:) Add a Rule-Set for All `img` Elements

- Add display, margin-left, margin-right and width properties to the rule-set

#### 6:) Add a Rule-Set for All `img` Elements that are Descendants of `div` Elements

- Add display, margin-left, margin-right and width properties to the rule-set

**Note:** Order and specificity of rule-sets matters. If this

#### 7:) Add a Rule-Set for All `a` Elements

- Add text-decoration and color properties to the rule-set

#### 8:) Add a Rule-Set for All `a` Elements on Hover

- Add text-shadow and font-weight properties to the rule-set

#### 9:) Add a Rule-Set for All `span` and `p` Elements

- Add font-style and left properties to the rule-set

#### 10) Add a Rule-Set for All children of all `section` Elements

- Add visibility and opacity properties to the rule-set

## Conclusion

CSS provides detailed control over how webpage content is displayed. We can
apply rules that have a broad effect and later rules that fine tune specific
elements. CSS syntax, however, can be strict, so it is good to practice writing
out a variety of rule-sets. You can always use the [W3 CSS validator][validator]
to check if your CSS is valid.

## References

-[CSS Selectors][selectors] -[CSS Specificity][specificity]

[selectors]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors
[specificity]: https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/
[validator]: https://jigsaw.w3.org/css-validator/
