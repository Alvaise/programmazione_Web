/**
 * @file: 05-credit-card-validation.js
 * @author: Alvise Spadea
 * Exercise on object in Javascript
 * 
 * Write a function called “validateCreditCard” that checks credit card
 * numbers according to the following rules:
 *  -Number must be 16 digits, all of them must be numbers
 *  -You must have at least two different digits represented (all of the digits cannot be the same)
 *  -The final digit must be even
 *  -The sum of all the digits must be greater than 16
 * 
 * The following credit card numbers are valid:
 *  -9999-9999-8888-0000
 *  -6666-6666-6666-1666
 * The following credit card numbers are invalid:
 *  -a923-3211-9c01-1112 invalid characters
 *  -4444-4444-4444-4444 only one type of number
 *  -1111-1111-1111-1110 sum less than 16
 *  -6666-6666-6666-6661 odd final number
 * 
 * Call the function with several credit card numbers:
 *  validateCreditCard('9999-9999-8888-0000');
 *  validateCreditCard('4444-4444-4444-4444');
 *  validateCreditCard('6666-6666-6666-1666');
 * The function returns an object saying that the credit card is valid, or what the error is:
 *  { valid: true, number: '9999-9999-8888-0000' }
 *  { valid: false, number: 'a923-3211-9c01-1112', error: 'wrong_length' }
 * 
 * For each card check, print out the result to the log in this format:
 * ================================
 * = number : a923-3211-9c01-1112 =
 * = valid : false                =
 * = error : wrong length         =
 * ================================
 */

function validateCreditCard(numCardStr) {
    let numCardStrCheckLenght = numCardStr.replace(/-/g,'');
    let contD = 0;
    let n1 = numCardStrCheckLenght[0];
    for (let index = 0; index < numCardStrCheckLenght.length; index++) {
        if (numCardStrCheckLenght[i]!==n1) {
            contD++;
        }
    }
    
}

let a ='9999-9999-8888-0000';
console.log(a);

let b = a.replace(/-/g,'');

//console.log(b[2]);

//let c = Number(b);

console.log(c + typeof c);