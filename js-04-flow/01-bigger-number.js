/**
* @file: 01-bigger-number.js
* @author: Alvise Spadea
* Exercise on flow in Javascript
*
* First I wrote a function greaterNum() that takes 2 arguments both numbers and return which is the greater.
* Then I Called the function a numbers of times and logged the output to make sure that everything is working corretly
*/
/**
 * return which numbers is greater
 * @param num1 First Number
 * @param num2 Second Number
 * @returns The greater number between the two
 */
function greaterNum(num1,num2) {
    if (num1>num2) {
        return num1;
    } else {
        return num2;
    }
}

let num1=33;
let num2=44;
console.log('The Greater number between '+ num1+' and '+ num2 + ' is '+greaterNum(num1,num2));
num1 =44;
num2 =44;
console.log('The Greater number between '+ num1+' and '+ num2 + ' is '+greaterNum(num1,num2));
num1 = 55;
num2 = 16;
console.log('The Greater number between '+ num1+' and '+ num2 + ' is '+greaterNum(num1,num2));