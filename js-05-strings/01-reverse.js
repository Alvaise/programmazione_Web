/**
 * @file: 01-reverse.js
 * @author: Alvise Spadea
 * Exercise on Strings in Javascript
 * 
 * Write a JavaScript function called printReverse which has one parameter, a
 * string, and which prints that string in reverse.
 * For example, the call printReverse("foobar") should result in "raboof" being
 * displayed. 
 */

/**
 * function that take a string and print the same string but in reverse order
 * @param str a String
 */
function printReverse(str) {
    let rts='';
    for(i=str.length;i>=0;i--){
        
        rts=rts+str.charAt(i); 
    }
    console.log(rts);
}
let str = 'foobar';
console.log(str);
printReverse(str);