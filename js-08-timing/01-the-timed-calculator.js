/**
 * @file: 01-the-timed-calculator.js
 * @author: Alvise Spadea
 * Exercise on timing in Javascript
 * 
 * We will modify ‘The Calculator’ exercise from the lesson about functions.
 * Rewrite the last function that performs all 4 operations so that there is a
 * delay of 3 seconds between one operation and the next.
 */

/**
 * function that give the square of a given number
 * @param {*} n 
 */
function squareNumber(n) {
    let nSq = Math.pow(n,2);
    console.log('The result of squaring the number '+n+' is '+nSq);
    return nSq;
}
/**
 * function that give the half of a given number
 * @param {*} n 
 */
function halfNumber(n) {
    hN = n/2;
    console.log('Half of '+n+' is '+hN);
    return hN;
}
/**
 * 
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function percentOf(num1,num2) {
    let numP= (num1/num2)*100
    console.log(num1+' is '+numP+'% of '+num2);
    return numP; 
}
/**
 * 
 * @param {*} radius 
 * @returns 
 */
function areaOfCircle(radius) {
    let area = Math.PI * (Math.pow(radius,2));
    console.log('The area for a circle with radius '+ radius+ ' is '+ area.toFixed(2));
    return area.toFixed(2);
}
/**
 * function that execute the functions halfNumber(), squareNumber(), areaOfCircle(), percentOF()
 * @param {*} n 
 * @returns empty string
 */
function calculator(n) {
    let nH= halfNumber(n);
    let nSq= setTimeout(squareNumber,3000,nH);
    let a= setTimeout (areaOfCircle,6000,nSq);
    let p= setTimeout(percentOf,9000,a,nSq);
    return '';
}

calculator(4);