/**
 * @file: 01-your-top-choices.js
 * @author: Alvise Spadea
 * Exercise on array in Javascript
 * 
 * Create an array to hold your top choices (colors, pets, books, whatever).
 * For each choice, log to the screen a string like: "My #1 choice is blue."
 * Bonus: Change it to add the correct number suffix, e.g. "My 1st choice, "My 2nd
 * choice", "My 3rd choice", "My 4th choice", etc.
 */
const myTopChoices = ['Red','Cat','The Foundation','Motorsport','Scuderia Ferrari','Carbonara'];
const suffix = ['st','nd','rd','th'];
for(let i=0;i<myTopChoices.length;i++){
    console.log('My '+(i+1)+'# choice is '+myTopChoices[i]);
}
for(let i=0;i<myTopChoices.length;i++){
    if (i<=2) {
        console.log('My '+((i+1)+suffix[i])+' choice is '+myTopChoices[i]);
    }
    else if(i>3){
        console.log('My '+((i+1)+suffix[3])+' choice is '+myTopChoices[i]);
    } 
}