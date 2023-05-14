/**
 * @file: 03-the-timed-temperature-converter.js
 * @author: Alvise Spadea
 * Exercise on timing in Javascript
 * 
 * We will modify ‘The Temperature Converter’ exercise from the lesson about
 * functions.
 * Call celsiusToFahrenheit on temperatures from 0 to 100 so that one
 * temperature is printed to the console every second.
 * Use setInterval to achieve this goal.
 * Do the same thing using setTimeout.
 */

/**
 * function that trasform the temperature from c to f
 * @param {Number} gC 
 * @returns gF 
 */
 function celsiusToFahrenheit(gC) {
    let gF= (gC * 9/5) + 32;
   return gF;
}
let n=0;
let timerId=setInterval(()=>{
    console.log(celsiusToFahrenheit(n)); 
    if(n>100){
        clearInterval(timerId);
        console.log('Stopped after 100');
    }
    n++;
},1000,n);


let nForSetTimeout = 0;
let s = 1000;

setTimeout(print=>{
    console.log(celsiusToFahrenheit(nForSetTimeout));
    
},1000,nForSetTimeout);
  



