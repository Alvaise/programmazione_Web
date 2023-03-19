/**
 * functions that calculate the dog age in dog years
 * @param {*} dAinHY dog Age in Human Years
 * @returns dAinDY dog Age in Dog Years
 */
function calculateDogAge(dAinHY) {
     let dAinDY = dAinHY*7;
    return dAinDY; 
}

console.log('Your dog is '+calculateDogAge(3)+' years old in dog years!');