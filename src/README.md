# Run the apps

Simply download the files and open index.html with any browser.  For Pizza Ordering application, open pizza.html in Chrome.  (Due to a console error for timing API, didn't work in Safari 9.)


# Efforts for improving performance

## index.html

* Moved minified CSS styles from external files to <style> tags in index.html.
* Added "async" attribute to the <script> tag for analytics.js.
* Removed the custom font as I believe Open Sans wouldn't add much dramatical effect.

## views/js/main.js

* Reduced the number of pizza images to 30.
* Moved the codes that set width and height of "mover" element to style.css.
* Moved the codes that get DOM elements to the global level as much as possible.
* Moved functions defined inside resizePizzas to the global level.
* Moved the codes that access styles outside of "for" loops as much as possible.
* Added the new function "getRandomPizzaContainerOffsetWidth" which returns one of three values based on the current pizza size.
* Reduced the resolution of pizzeria.jpg.

