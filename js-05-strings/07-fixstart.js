/**
 * @file: 07-fix-start.js
 * @author: Alvise Spadea
 * Exercise on Strings in Javascript
 * 
 * Create a function called fixStart.
 * It should take a single argument, a string, and return a version where all
 * occurrences of its first character have been replaced with '*', except for the
 * first character itself.
 * You can assume that the string is at least one character long.
 */

/**
 * function that substitute with * from the second instance of first character
 * @param String str
 * @returns fC+strR the first character plus the string with the character substitued
 */
function fixStart(str) {
    if (typeof str !== 'string') {
        console.error("type error");
    }
    let strR = str.slice(1);
    let fC = str.charAt(0);
    const re = new RegExp(fC,"gi");
    strR= strR.replace(re,'*');
    return (fC+strR);
}

//console.log(fixStart('abcdefgh'));
console.log(fixStart(18)); 