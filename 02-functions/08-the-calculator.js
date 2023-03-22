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
    return area;
}
function calculator(n) {
    let nH= halfNumber(n);
    let nSq= squareNumber(nH);
    let a= areaOfCircle(nSq);
    let p= percentOf(a,nSq);
}

console.log(calculator(2));