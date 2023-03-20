function calculator(n) {
    let nH= halfNumber(n);
    let nSq= squareNumber(nH);
    let a= areaOfCircle(nSq);
    let p= percentOf(a,nSq);
}

console.log(calculator(2));