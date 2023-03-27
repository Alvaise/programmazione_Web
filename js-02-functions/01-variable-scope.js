function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}
function addNumbers(num1, num2) { // metti arrow function
    let result = num1 + num2;
    return result;
}
function addNumbers(num1, num2) { // metti arrow function
    let result = num1 + num2;
    return result;
}
let i;// global scope
for(i=0;i<20;i++){
    let num1=i; 
    let num2=i+1;
    let r= addNumbers(num1,num2);
    console.log(r+"a");
    num1++; 
    num2++;
}
for(i=0;i<20;i++){
    let num1=i; 
    let num2=i+1;
    let r= addNumbers(num1,num2);
    console.log(r+"b");
    num1++; 
    num2++;
}
for(i=0;i<20;i++){
    let num1=i; 
    let num2=i+1;
    let r= addNumbers(num1,num2);
    console.log(r+"c");
    num1++; 
    num2++;
}