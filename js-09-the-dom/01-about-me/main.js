/**
 * @file: main.js
 * @author: Alvise Spadea
 * Exercise on dom in Javascript
 * In JavaScript:
 * Change the body style so it has a font-family of "Arial, sans-serif"
 * ○ Replace each of the spans (nickname, favorites, hometown) with your own information
 * ○ Iterate through each li and change the class to "list-item"
 * ○ Create a new img element and set its src attribute to a picture of you
 * ○ Append that element to the page
 * ● Add an external css file using Javascript
 * ○ The external css file should make items with the .list-item class white, bold and with an
 *   orange background
 *  The external css file should be applied after 4 seconds
 * 
 */
let pageNode = document.body;
pageNode.style.fontFamily = 'Arial, sans-serif'

document.getElementById("nickname").textContent = "Alvise";
document.getElementById("favorites").textContent = "Pizza,Pasta";
document.getElementById("hometown").textContent = "Chivasso";

let li = document.querySelectorAll('li');

for (let index = 0; index < li.length; index++) {
    li[index].className = 'list-item';
}

let imgMe = document.createElement('img');
imgMe.src = "avatars-000189067416-rwsi0t-t500x500.jpg";
pageNode.appendChild(imgMe);

let head = document.head;
let css = document.createElement('link');
css.href ='style.css';
css.rel ='stylesheet';
setTimeout(()=>{head.appendChild(css);},4000,css);






