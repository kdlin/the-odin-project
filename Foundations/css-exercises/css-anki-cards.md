# CSS Foundations Anki Cards

## Intro to CSS

**Q: What does CSS stand for?**
A: Cascading Style Sheets

**Q: What are the three ways to add CSS to HTML?**
A: 1. Inline styles (style attribute)
2. Internal stylesheet (<style> tag in <head>)
3. External stylesheet (<link> tag to .css file)

**Q: Which method of adding CSS is considered best practice and why?**
A: External stylesheet - keeps HTML and CSS separate, allows reusability across multiple pages, and maintains clean code organization

**Q: What is the basic syntax of a CSS rule?**
A: selector { property: value; }

**Q: What are the three basic CSS selectors?**
A: 1. Element selector (p, div, h1)
2. Class selector (.classname)
3. ID selector (#idname)

**Q: How do you select multiple elements with one rule in CSS?**
A: Use commas to separate selectors: p, div, h1 { color: red; }

## The Cascade

**Q: What does "cascade" mean in CSS?**
A: The cascade is the algorithm that determines which CSS rules apply when multiple rules target the same element

**Q: What are the three factors that determine which CSS rule wins in the cascade (in order)?**
A: 1. Specificity (most important)
2. Source order (when specificity is equal)
3. Inheritance

**Q: How is CSS specificity calculated? What is the (0-0-0) format?**
A: (ID - CLASS - ELEMENT)
- First digit: Number of ID selectors
- Second digit: Number of class selectors, attributes, pseudo-classes
- Third digit: Number of element/type selectors

**Q: Calculate the specificity: .header .nav li**
A: (0-2-1) - 2 classes and 1 element

**Q: Calculate the specificity: #main p.highlight**
A: (1-1-1) - 1 ID, 1 class, 1 element

**Q: Which selector has higher specificity: div.text or .text.child?**
A: .text.child (0-2-0) beats div.text (0-1-1)

**Q: What is a descendant selector in CSS?**
A: A selector with a space between parts that targets elements nested inside other elements. Example: .parent .child selects .child inside .parent

**Q: What is a compound selector in CSS?**
A: Multiple selectors written together WITHOUT spaces, targeting elements that have ALL specified classes/attributes. Example: .class1.class2

**Q: What's the difference between ".para .small" and ".para.small"?**
A: ".para .small" selects .small INSIDE .para (descendant)
".para.small" selects elements with BOTH classes (compound)

**Q: What's the difference between ".para, .small" and ".para.small"?**
A: ".para, .small" selects ALL .para elements AND ALL .small elements (group selector)
".para.small" selects ONLY elements with both classes (compound)

**Q: When two CSS rules have the same specificity, which one wins?**
A: The last one in the source order (the one that appears later in the CSS file)

**Q: What is inheritance in CSS?**
A: Some CSS properties (like color, font) are passed from parent elements to their children automatically

## Inspecting HTML and CSS

**Q: What keyboard shortcut opens Developer Tools in most browsers?**
A: F12 or Ctrl+Shift+I (Cmd+Option+I on Mac)

**Q: How do you inspect a specific element on a webpage?**
A: Right-click on the element and select "Inspect" or "Inspect Element"

**Q: In DevTools, how can you temporarily edit CSS to test changes?**
A: Click on any CSS property or value in the Styles panel and edit it directly (changes are temporary)

**Q: What does the "Computed" tab show in DevTools?**
A: The final calculated styles that are actually applied to an element after all CSS rules are processed

**Q: How can you see which CSS file and line number a style comes from in DevTools?**
A: Look at the right side of each CSS rule in the Styles panel - it shows filename:line-number

**Q: What do crossed-out styles in DevTools indicate?**
A: Styles that are being overridden by other rules with higher specificity or later source order

## The Box Model

**Q: What are the four parts of the CSS Box Model (from inside to outside)?**
A: 1. Content
2. Padding
3. Border
4. Margin

**Q: What does padding do in the box model?**
A: Adds space INSIDE the element, between the content and the border. Background color extends into padding.

**Q: What does margin do in the box model?**
A: Adds space OUTSIDE the element, creating distance between elements. Margin is always transparent.

**Q: What's the difference between padding and margin?**
A: Padding is inside the border (background color shows), margin is outside the border (always transparent)

**Q: How do you set different values for each side with padding/margin?**
A: padding: top right bottom left; (clockwise from top)
OR use individual properties: padding-top, padding-right, etc.

**Q: What is the shorthand for padding: 10px 10px 10px 10px?**
A: padding: 10px;

**Q: What is the shorthand for margin: 10px 20px 10px 20px?**
A: margin: 10px 20px; (vertical horizontal)

**Q: What does box-sizing: border-box do?**
A: Makes width and height include padding and border (instead of just content)

**Q: By default, if an element has width: 100px, padding: 10px, and border: 5px, what's its total width?**
A: 130px (100 + 10*2 + 5*2) - content + padding + border

**Q: What is margin collapse?**
A: When vertical margins of adjacent elements touch, they collapse into a single margin (the larger one wins)

**Q: Do horizontal margins collapse?**
A: No, only vertical (top and bottom) margins collapse

## Block and Inline

**Q: What are the characteristics of block-level elements?**
A: 1. Take up full width available
2. Start on a new line
3. Can have width, height, margin, and padding on all sides

**Q: Name 5 common block-level elements**
A: div, p, h1-h6, ul, li, section, article, header, footer, main

**Q: What are the characteristics of inline elements?**
A: 1. Only take up as much width as needed
2. Don't start on a new line
3. Can't set width or height
4. Vertical margin and padding don't affect layout

**Q: Name 5 common inline elements**
A: span, a, strong, em, img, button, input, label, code

**Q: Can you put a block element inside an inline element?**
A: No, it's invalid HTML (though browsers may still render it)

**Q: What does display: inline-block do?**
A: Makes an element behave like inline (sits on same line) but allows width, height, and vertical margin/padding like block

**Q: How do you change a <span> to behave like a block element?**
A: display: block;

**Q: How do you change a <div> to behave like an inline element?**
A: display: inline;

**Q: What's the difference between display: none and visibility: hidden?**
A: display: none removes element from layout completely
visibility: hidden hides element but preserves its space

**Q: Can you set width and height on inline elements?**
A: No, width and height are ignored on inline elements (except replaced elements like img)

**Q: What happens when you add vertical margin to an inline element?**
A: It has no effect - vertical margins don't work on inline elements

## Mixed Concepts

**Q: If .button has background: white and #confirm-button has background: green, what color is an element with id="confirm-button" class="button"?**
A: Green - ID selector (1-0-0) beats class selector (0-1-0)

**Q: Write a selector that targets only <p> elements with both classes "text" and "bold"**
A: p.text.bold

**Q: What's wrong with this selector: .parent.child (if trying to select .child inside .parent)?**
A: Missing space - should be .parent .child for descendant selector

**Q: How would you select all direct children of a div with class "container"?**
A: .container > *

**Q: If two rules have specificity (0-1-0) and (0-0-2), which wins?**
A: (0-1-0) wins - one class beats two elements

**Q: What unit is best for font-size: px, em, or rem? Why?**
A: rem is often best - relative to root font size, predictable, and allows user scaling