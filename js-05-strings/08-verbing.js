/**
 * @file: 08-verbing.js
 * @author: Alvise Spadea
 * Exercise on Strings in Javascript
 * 
 * Create a function called verbing.
 * It should take a single argument, a string. If its length is at least 3, it should
 * add 'ing' to its end, unless it already ends in 'ing', in which case it should add
 * 'ly' instead.
 * If the string length is less than 3, it should leave it unchanged.
 */

/**
 * function that modify the string according to grammar rules
 * @param str
 * @return str
 */

//tieni presente della grammatica inglese, es se finisce in consonante la raddoppi 
//da migliorare
function verbing(str) {
    let strE=str.slice(-3);
    if (str.length>=3 && strE!='ing') {
        return str +'ing';
    } else if(str.length>=3 && strE=='ing') {
        return str+'ly';
    } 
    return str;
}

console.log(verbing('swim')); 
console.log(verbing('swimming')); 
console.log(verbing('go')); 

