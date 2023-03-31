/**
 * @file: 03-palindrome.js
 * @author: Alvise Spadea
 * Exercise on Strings in Javascript
 * 
 * Using your reverse() function from the previous exercise, write a simple
 * function to check if a string is a palindrome.
 * A palindrome is a word that reads the same backwards as forwards. For
 * example, the word "madam" is a palindrome.
 * Write a JavaScript function called isPalindrome which has one parameter, a
 * string, and which returns true if that string is a palindrome, else false.
 * For example, the call isPalindrome("madam") should return true, while
 * isPalindrome("madame") should return false.
 * Bonus: Try to write the same function without using the reverse() function
 *  
 */

/**
 * function that take a string and return the same string but in reverse order
 * @param str a String
 * @returns the string in reverse
 */
function printReverse(str) {
    let rts='';
    for(i=str.length;i>=0;i--){
        
        rts= rts+str.charAt(i); 
    }
    return rts;
}
/**
 * function that check if a string is a palindrome, casing don't matter but the white spaces do
 * so it works only on single word. For phrases it won't work.
 * @param {*} str 
 * @returns true is the word is a palidrome or false
 */
function isPalindrome(str) {
    str=str.toUpperCase();
    let rts=printReverse(str);
    if (str==rts) {
        return true;
    }
    return false; 
}

/**
 * the is palidrome functions but without using the printReverse function()
 */
function isPalindromeNoRev(str) {
    
}

let str='MadaMe';

console.log(isPalindrome(str));