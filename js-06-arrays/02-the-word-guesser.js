/**
 * @file: 01-your-top-choices.js
 * @author: Alvise Spadea
 * Exercise on array in Javascript
 * 
 * Implementing a game similar to Hangman
 */


function guessLetter(l) {
    let nG = 6;
    if (nG !==0 ) {
        l=l.toUpperCase();
        let checkl = (element) => l===element ;
        let g = word.some(checkl);
        if (g) {
            for (let i = 0; i < word.length; i++) {
                let a = word.indexOf(l,i);
                if (a>=0) {
                    gL.splice(a,1,l);
                }
            }
            console.log("You have guessed correct");
            return gL;
        }
        nG--;
        console.log('You have guessed wrong');
        console.log('Number of guesses remaining:'+nG);
        return gL;
    } else {
        return 'You have finished your guesses'
    }
}

const word=['C','A','T'];
let gL= ['_','_','_'];

