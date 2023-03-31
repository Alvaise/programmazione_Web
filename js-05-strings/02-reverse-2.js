/**
 * @file: 02-reverse-2.js
 * @author: Alvise Spadea
 * Exercise on Strings in Javascript
 * 
 * Write a JavaScript function called reverse which has one parameter, a string,
 * and which returns that string in reverse.
 * For example, the call reverse("foobar") should return the string "raboof". 
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
let str='foobar';
console.log(str);
let rts= printReverse(str);
console.log(rts);