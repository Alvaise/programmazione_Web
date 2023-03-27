/**
 * function that calculate the circumference of a circle
 * @param {*} radius 
 * @returns circomference of circle
 */
function calcCircumference(radius) {
    return circ =(2*Math.PI)*(radius*2);
}

/**
 * function that calculate the area of the circle
 * @param {*} radius 
 * @returns area of circle
 */
function calcArea(radius) {
    return area = Math.PI * (Math.pow(radius,2));
}
let r = 50;
console.log('The Circumference is '+calcCircumference(r).toFixed(2));
console.log('The Area is '+calcArea(r).toFixed(2));