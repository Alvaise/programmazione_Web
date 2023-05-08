 /* function fibonacci(n) {
    if (n<2) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}
*/
// let catsRule = true;
// if (catsRule) {
//     console.log('Yay cats!');
// }
// console.log(typeof(catsRule));
// let firstName = 0;
// if(firstName){
//     console.log('Hello, '+firstName);
// }
//console.log(typeof(firstName));
// let secondName;
// if(secondName){
//     console.log('Your name is '+ secondName);
// }
//console.log(typeof(secondName));
// let points;
// if (points) {
//     console.log('You Have '+ points + ' points');
// }

// length
// const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let alphabetLength = alphabet.length;
// console.log(alphabetLength);
//  charAt()
// let greeting = "HELLO WORLD";
// let result = greeting.charAt(6);
// console.log(result);
// indexOf()
// let statement = "Hello world, welcome to the universe.";
// let wordPosition = statement.indexOf("welcome");
// console.log(wordPosition);

// property access
// const alphabetLowercase = "abcdefghijklmnopqrstuvwxyz";
// console.log(alphabetLowercase[2]); // 'a'
// console.log(alphabetLowercase.charAt(1));
// console.log(alphabetLowercase.length);
// charAt()
// let greeting = "HELLO WORLD";
// let result = greeting.charAt(0);
// console.log(result);

// let alphabetLowercase = "abcdefghijklmnopqrstuvwxyz?'èéèòçò@°à#";
//  for (let i = 0; i < alphabetLowercase.length; i++) {
    
   //console.log(alphabetLowercase.charCodeAt(i));
//  }

//console.log(/l/.test("The best things in life are free!"));

/* const name = 'james';
const age = 25;
// interpolate variable bindings
console.log(`My name is ${name} 
I am ${age + 10} 
years old (lie)`);
// without using template strings
 */

// let name = 'james';
// let age = 25;
// // without using template strings
// console.log('My name is '.concat(name, ' I am').concat(age + 10, ' years old (lie)'));

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.forEach(Element => console.log(Element));
// // At position 2, add 2 elements, remove 1: 
// fruits.splice(2, 1, "Lemon", "Kiwi");
// fruits.forEach(Element => console.log(Element));

// let a = [1,2,3,4,5];
// console.log(a);
// console.log(a.splice(3,2));
// console.log(a);

// let lizzieTheCat = {
//     age: 18,
//     furColor: 'grey',
//     meow: function() {
//     console.log('meowww');
//     },
//     eat: function(food) {
//     console.log('Yum, I love ' + food);
//     },
//     sleep: function(numMinutes) {
//     for (let i = 0; i < numMinutes; i++) {
//     console.log('z');
//     }
//     }
//     };

// lizzieTheCat.meow();
// lizzieTheCat.eat('brown mushy stuff');
// lizzieTheCat.sleep(10);
// console.log(Array.isArray());

// function sayHi() {
//     console.log('Hello');
//     }
// setTimeout(sayHi, 1000);

let d = new Date();
console.log(d.getHours());