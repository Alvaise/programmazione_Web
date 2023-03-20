/**
 * function that trasform the temperature from c to f
 * @param {*} gC 
 * @returns gF 
 */
function celsiusToFahrenheit(gC) {
     let gF= (gC * 9/5) + 32;
    return gF;
}
/**
 * function that trasform the temperature from f to c
 * @param {*} gF 
 * @returns gC
 */
function fahrenheitToCelsius(gF) {
     let gC= (gF-32)*5/9;
     return gC;
}
let gC=Math.random()*100;
console.log(gC.toFixed(0)+' Celsius is '+celsiusToFahrenheit(gC).toFixed(0)+' Fahrenheit');
let gF=Math.random()*100;
console.log(gF.toFixed(0)+' Fahrenheit is '+fahrenheitToCelsius(gF).toFixed(0)+' Celsius');