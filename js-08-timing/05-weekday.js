/**
 * @file: 05-weekday.js
 * @author: Alvise Spadea
 * Exercise on timing in Javascript
 * 
 * Write a function getWeekDay(date) to show the weekday in short format:
 * ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
 *      ● Write another function that does the same in Italian.
 *      ● Add a language parameter to the function that accepts ‘en’ or ‘it’ and
 *        outputs the day in the correct language.
 */

function getWeekDay(l) {
    date = new Date();
    const week = ['MO','TU','WE','TH','FR','SA','SU'];
    const sett = ['LUN','MAR','MER','GIO','VEN','SAB','DOM'];
    if (l==='en') {
        return week[date.getDay()-1];
    }
    if (l==='it') {
        return sett[date.getDay()-1];
    }
    throw new Error("language not supported");
}

console.log(getWeekDay('en')); 
console.log(getWeekDay('it')); 
