/**
* @file: 05-the-even-odd-reporter.js
* @author: Alvise Spadea
* Exercise on the flow of javascript
*
*  Uses a for loop to test the function gradeAssigner(), check every value from
*  60 to 100.
*/
/**
 * function that transform a number score in a grade score, uses the variables lS that stand for letter score
 * F 0-59
 * D 60-69
 * C 70-79
 * B 80-89
 * A 90-100
 * @param numeric score from 60 to 100
 * @return lS vote in letter 
 */
 function assignGrade(nS) {
    let lS = '';
    if (nS<=59) {
        return lS='F';
    } else if (nS>=60 && nS<=69) {
        return lS='D';
    } else if(nS>=70 && nS<=79){
        return lS='C';
    } else if (nS>=80 && nS<=89) {
        return lS='B';
    }else if (nS>=90 && nS<=100) {
        return lS='A';
    } else{
        return 'Errore';
    }
    
}

for( let i=60;i<=100;i++){
    console.log('For '+i+', you got '+assignGrade(i));


}