/**
 * @file: 04-capital.js
 * @author: Alvise Spadea
 * Exercise on Strings in Javascript
 * 
 * Write a JavaScript function called capital which has one parameter, a string,
 * and which returns that string with the first letter capitalized.
 * For example, the call capital("hello world") should return the string "Hello
 * world".
 * Bonus: modify the function so that it capitalizes each word.
 * capital2("my name is john") should return the string "My Name Is John"
 */

/**
 * function that capitalize the first letter 
 * @param str a string
 * @returns c the string with the first letter capitalized
 */
function capital(str) {
    let c = str.charAt(0).toUpperCase() + str.slice(1);

    return c;
}



let a = 'hello world';

console.log(capital(a)); 