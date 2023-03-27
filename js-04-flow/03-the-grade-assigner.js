/**
* @file: 03-the-grade-assigner.js
* @author: Alvise
* Exercise on the flow of javascript
*
* Uses the function assignGrad to trasform a numeric score in a letter grade 
* 
*/
/**
 * function that transform a number score in a grade score, uses the variables lS that stand for letter score
 * F 0-6 
 * D 7-12
 * C 13-18
 * B 19-24
 * A 25-30
 * @param numeric score from 0 to 30
 * @return lS vote in letter 
 */
function assignGrade(nS) {
    let lS = '';
    if (nS>=0 && nS<=6) {
        return lS='F';
    } else if (nS>=7 && nS<=12) {
        return lS='D';
    } else if(nS>=13 && nS<=18){
        return lS='C';
    } else if (nS>=19 && nS<=24) {
        return lS='B';
    }else if (nS>=25 && nS<=30) {
        return lS='A';
    } else{
        return 'Errore';
    }
    
}

let vote =assignGrade(2);
console.log(vote);
vote =assignGrade(8);
console.log(vote);
vote =assignGrade(15);
console.log(vote);
vote =assignGrade(22);
console.log(vote);
vote =assignGrade(27);
console.log(vote);
//Controllo errori
vote =assignGrade(-5); 
console.log(vote);
vote =assignGrade(36);
console.log(vote);