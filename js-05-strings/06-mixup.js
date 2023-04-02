/**
 * @file: 06-mix-up.js
 * @author: Alvise Spadea
 * Exercise on Strings in Javascript
 * 
 * Create a function called mixUp.
 * It should take in two strings, and return the concatenation of the two strings
 * (separated by a space) slicing out and swapping the first 2 characters of
 * each.
 * You can assume that the strings are at least 2 characters long. 
 */

/**
 * function that swaps the first two character of two strings
 * @param str1
 * @param str2
 * @returns str1+str2
 */
function mixUp(str1,str2) {
    let a=str2.slice(0,2);
    let b=str1.slice(0,2);
    str1 = a + str1.slice(2);
    str2 = b + str2.slice(2);
    return str1+' '+str2;
}


console.log('dog dinner');
console.log(mixUp('dog','dinner'));
console.log('mix pod');
console.log(mixUp('mix','pod'));