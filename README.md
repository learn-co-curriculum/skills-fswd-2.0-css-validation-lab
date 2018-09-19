# CSS Flexbox Essentials Lab

In this lab we’re going to get practice writing the HTML and CSS necessary to
create a basic flexbox.

## Objectives

- Practice writing CSS rule-sets for flex
- Practice applying CSS classes to HTML elements

## Instructions

Work through the problems below one at a time, writing your solutions in
`index.html` and `index.css`. Run `learn` to verify you've written a correct
solution for each.

To see how flexbox changes the display of content, open `index.html` or run
`httpserver` now and refresh the page as you solve each problem.

#### 1) Apply a Minimal Flexbox Display to a `div`

- Add the class "firstContainer" to the provided `div` tag
- Write a CSS rule-set for `.firstContainer` and set `display` to `flex`

#### 2) Apply a Flexbox Column Display to a `section`

- Add the class "secondContainer" to the provided `section` tag
- Write a CSS rule-set for `.secondContainer` that sets the display to `flex` and
  and flex-direction to `column`

#### 3) Apply a Flexbox Reverse Row Display to a `nav`

- Add the class "navContainer" to the provided `nav` tag
- Write a corresponding flex display rule-set where direction is set to `row-reverse`

#### 4) Apply a Flexbox Reverse Column Display to a `form`

- Add the class "formContainer" to the provided `form` tag
- Write a corresponding flex display rule-set where flex-direction is set to
  `column-reverse`

#### 5) Apply a Flexbox Wrapped Column Display to a `header`

- Add the class "headerContainer" to the provided `header` tag
- Write a corresponding flex display rule-set where flex-direction is set to
  `column`, flex-wrap is set to `wrap`, and height is set to `200px`

#### 6) Apply a Flexbox No Wrap Row Display to a `section`

- Add the class "sectionContainer" to the second `section` tag provided
- Write a corresponding flex display rule-set using `flex-flow` in place of
  `flex-direction` and `flex-wrap`. Set to it to display a row with no wrapping

#### 7) Apply a Flexbox Display to the Nested Child of another Flexbox Display

- Add the class "mainContainer" to the provided `main` tag. The corresponding
  rule-set should display children as a column with no wrapping
- Add the class "nestedContainer" to the `section` tag nested within `main`. The
  corresponding rule-set should display children in a row with no wrapping

#### 8) Apply a Nested Flexbox Display Using Alternative Selectors

- Add the **id** "articleContainer" to the provided `article` tag. The
  corresponding rule-set should display children as a row with no
  wrapping
- Add a rule-set for all `figure` tags. The rule-set should display all children
  in reverse column direction

#### 9) Apply a Nested Flexbox Display Using Alternative Selectors

- Add the class "divContainer" to the final provided `div` tag. The
  corresponding rule-set should display children in reverse row direction
- Add a rule-set for all `span` tags that are children of `.divContainer`. The
  rule-set should display all children in reverse column direction

#### 10) Apply a Flexbox Display to `body`

- Add a rule-set for the `body` tag that displays all children in reverse column
  direction

## Conclusion

Flexbox displays can entirely alter the position and order of content on a
webpage. Applying a minimal flex display to pages you build can keep content
properly positioned and organized.

## References

-[HTML <iframe> Tag][iframes]

[iframes]: https://www.w3schools.com/tags/tag_iframe.asp
