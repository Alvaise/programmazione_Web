/**
 * @file: 05-money.js
 * @author: Alvise Spadea
 * Exercise on Strings in Javascript
 * 
 * Create a function called Money
 * It should take a single argument, an amount, and return '<amount> dollars'
 * Add a smiley at the end if the amount is 1 million. Deal with edge cases 
 */

// aggiungi controllo dei casi che non sia un numero o un numero valido
function money(amount) { 
    if (typeof amount !== "number" || amount<0) {
        return NaN;
    }
    if(amount>= 1000000){
        return  amount+' dollars :)';
    }
    return amount+' dollars';
}

// console.log(money(10));
console.log(money(1000000));
console.log(money(10));
console.log(money(-10));
console.log(money('ciao'));
