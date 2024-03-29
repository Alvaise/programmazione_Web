/**
* @file: 04-the-pluralizer.js
* @author: Alvise Spadea
* Exercise on the flow of javascript
*
* Usage of a function named pluralize() to put noun in plurative form 
* 
*/

/**
 * Function that take a singolar noun and a number and output the plurative form
 * ex. 2 cat ==> 2 cats
 * @param noun 
 * @param number 
 * @return noun at the plural form
 */
function pluralize(noun, number) { // funzione upgradata 
    if (number > 1) {
        noun += 's';
    } 
    return noun; 
}

let noun ='cat';
let number = 2;
console.log(number + ' '+ pluralize(noun,number));
noun ='cat';
number = 1;
console.log(number + ' '+ pluralize(noun,number));