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

/**
 * generates the story based on the input values and displays it in the story div.
 * - The function retrieves the current values of the form input elements (`noun`, `adjective`, and `person`).
 * - It creates a new `h2` element and sets its `textContent` to the generated story.
 * - Finally, it appends the `h2` element to the story div.
 */
function makeStory() {
   let divStory = document.getElementById('story');
    let noun = document.getElementById('noun').value;
   let adjective = document.getElementById('adjective').value;
   let person = document.getElementById('person').value;
   let h2 = document.createElement('h2');
   h2.textContent = person +' '+adjective+' '+noun;
   divStory.appendChild(h2);
}

const button = document.getElementById('gen-button');

button.addEventListener('click',makeStory);