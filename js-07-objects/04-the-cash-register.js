/**
 * @file: 04-the-cash-register.js
 * @author: Alvise Spadea
 * Exercise on object in Javascript
 * 
 * Write a function called cashRegister that takes a shopping cart object.
 * The object contains item names and prices (itemName: itemPrice).
 *  The function returns the total price of the shopping cart, e.g. :
 * // Input
 * let cartForParty = {
 *  banana: "1.25",
 *  handkerchief: ".99",
 *  Tshirt: "25.01",
 *  apple: "0.60",
 *  nalgene: "10.34",
 *  proteinShake: "22.36"
 * };
 * // Output
 * cashRegister(cartForParty)); // 60.55
 */

/**
 * Function that calculate the total of an Object cart and return the total
 * First put the value of each properties of the object and put in an array using the method values 
 * of the object Object, then it uses the array method and the object Number to turn the array of string into
 * an array of number and uses the method reduce of the object array to sum all the value
 * @param Object cart
 * @returns total of value of the cart
 */
function cashRegister(cart) {
    let arrPricesStr = Object.values(cart);
    let arrPricesNum = arrPricesStr.map(item => Number(item));
    let total = arrPricesNum.reduce((sum,el) => {return sum+el},0);
    return total;
}

let cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
    };
 
let totalCart = cashRegister(cartForParty);
console.log('The total is '+totalCart); 

