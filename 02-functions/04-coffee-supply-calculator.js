/**
 * function that calculate the amount of cups of coffee needed for the rest of life
 * @param {*} age 
 * @param {*} amountPerDay in cups
 */
function calculateSupply(age, amountPerDay) {
    const maxAge = 83;
    let yL = maxAge - age;
    coffeeRestOfLife = (amountPerDay*365)*yL;
    console.log('You wil need ' + coffeeRestOfLife + ' cups of coffee to last you until the ripe old age of ' + maxAge);
}
/**
 * function that calculate the amount of liters of coffee needed for the rest of life
 * @param {*} age 
 * @param {*} amountPerDay 
 */
function calculateSupplyLiters(age, amountPerDay) {
    amountPerDay = amountPerDay*0.3;
    const maxAge = 83;
    let yL = maxAge - age;
    coffeeRestOfLife = (amountPerDay*365)*yL;
    console.log('You wil need ' + coffeeRestOfLife.toFixed(0) + ' liters of coffee to last you until the ripe old age of ' + maxAge);
}

let ageIn = (Math.random()*100);
ageIn =ageIn.toFixed(0);
console.log(ageIn);
calculateSupply(ageIn,2);
calculateSupply(ageIn,5);
calculateSupply(ageIn,4);
calculateSupplyLiters(ageIn,2); 