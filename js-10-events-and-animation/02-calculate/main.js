/**
 * @file: main.js
 * @author: Alvise Spadea
 * Exercise on event in Javascript
 * Use the functions from the previous calculator exercises
 * For each operation, create an event listener for the button, and when it's
 * clicked, find the value of the appropriate input and show the result of the
 * calculation in the solution div
 * Afterwards, change the code so that you respond to key presses so that the
 * user doesn't have to click the button
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
 * percent of the first number in the second
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
 * function to calculate the area of circle given the radius
 * @param {*} radius 
 * @returns 
 */
function areaOfCircle(radius) {
    let area = Math.PI * (Math.pow(radius,2));
    console.log('The area for a circle with radius '+ radius+ ' is '+ area.toFixed(2));
    return area.toFixed(2);
}

//Event Listener for Button click
document.getElementById('square-button').addEventListener('click',()=>{
    let squareOutput = squareNumber(document.getElementById('square-input').value);
    solution.textContent = 'Square of the number '+document.getElementById('square-input').value+': ' +squareOutput;
});
document.getElementById('half-num-button').addEventListener('click',()=>{
    let halfNumOutput = halfNumber(document.getElementById('half-number-input').value);
    solution.textContent = 'Half of the number '+document.getElementById('half-number-input').value+': ' +halfNumOutput;
});
document.getElementById('percent-button').addEventListener('click',()=>{
    let percentOutput = percentOf(document.getElementById('num-1-per').value,document.getElementById('num-2-per').value);
    solution.textContent = document.getElementById('num-1-per').value+' is '+percentOutput +'% of '+document.getElementById('num-2-per').value;
});
document.getElementById('area-calc-button').addEventListener('click',()=>{
    let area = areaOfCircle(document.getElementById('radius').value);
    solution.textContent = 'The area of a circle with a radius of '+ document.getElementById('radius').value +' is: '+area;
});

document.getElementById('square-input').addEventListener('keydown',(event)=>{
    if (event.key==='Enter') {
        let squareOutput = squareNumber(document.getElementById('square-input').value);
        solution.textContent = 'Square of the number '+document.getElementById('square-input').value+': ' +squareOutput;
    }
});