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

