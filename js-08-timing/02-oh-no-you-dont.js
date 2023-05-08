/**
 * @file: 02-oh-no-you-dont.js
 * @author: Alvise Spadea
 * Exercise on timing in Javascript
 * 
 * Write a function “useful” that does something useful in Javascript.
 * Schedule it to run after 10 seconds.
 * Write another function that cancels the scheduling of the first function.
 * Use the second function to cancel the first one after 5 seconds and output
 * ‘function cancelled’ to the console.
 */

/**
 * function that does something useful
 * @param n 
 * @return n
 */
function useful(n) {
    n=0;
    console.log('UAOOOOOOOOO');
    return n;
}

/**
 * function that cancel the useful function
 */
function cancel() {
    clearTimeout(timer);
    setTimeout(()=>{console.log('function cancelled');},5000);
}

let timer = setTimeout(useful,10000,10);
cancel();




