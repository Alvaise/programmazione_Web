## Code README

### Introduction
This README provides an overview and instructions for the HTML and JavaScript code in the provided files. The code is designed to generate a story based on user input and display it on a web page.

### HTML Structure
The HTML code contains a simple form with input fields for a noun, adjective, and someone's name. It also includes a button and a div to display the generated story. Here's a breakdown of the HTML structure:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>Story</title>
</head>
<body>
<h1>Story</h1>
<ul>
<li>Noun: <input type="text" id="noun">
<li>Adjective: <input type="text" id="adjective">
<li>Someone's Name: <input type="text" id="person">
</ul>
<button id="gen-button">Lib it!</button>
<div id="story"></div>
</body>
<script src="main.js"></script>
</html>
```

The HTML structure consists of the following elements:
- `<h1>`: Displays the heading "Story."
- `<ul>`: Contains a list of form inputs.
  - `<li>`: Represents each form input with a label and an input field.
    - `<input type="text" id="noun">`: Represents the input field for the noun.
    - `<input type="text" id="adjective">`: Represents the input field for the adjective.
    - `<input type="text" id="person">`: Represents the input field for someone's name.
- `<button id="gen-button">`: Represents the button with the ID "gen-button" that triggers the story generation.
- `<div id="story"></div>`: Represents the div with the ID "story" where the generated story will be displayed.

### JavaScript Code
The JavaScript code in the `main.js` file handles the event when the button is clicked and generates the story based on the input values. Here's a breakdown of the JavaScript code:

```javascript
/**
 * @file: main.js
 * @author: Alvise Spadea
 * Exercise on event in Javascript
 * Add an event listener to the button so that it calls a makeStory function
 * when clicked.
 * In the makeStory function, retrieve the current values of the form input
 * elements, make a story from them, and output that in the story div (like
 * "Joseph really likes pink cucumbers.")
 */
function makeStory() {
   let divStory = document.getElementById('story');
   let noun = document.getElementById('noun').value;
   let adjective = document.getElementById('adjective').value;
   let person = document.getElementById('person').value;
   let h2 = document.createElement('h2');
   h2.textContent = person + ' ' + adjective + ' ' + noun;
   divStory.appendChild(h2);
}

const button = document.getElementById('gen-button');
button.addEventListener('click', makeStory);
```

The JavaScript code includes the following:
- A function named `makeStory()` that generates the story based on the input values and displays it in the story div.
- The function retrieves the current values of the form input elements (`noun`, `adjective`, and `person`).
- It creates a new `h2` element and sets its `textContent` to the generated story.
- Finally, it appends the `h2` element to the story div.
- An event listener is added to the button element with the ID "gen-button" to trigger the `makeStory()` function when the button is clicked.

### Prerequisites
To run this code, you need a web browser that supports HTML,