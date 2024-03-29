/**
 * @file: 07-seconds.js
 * @author: Alvise Spadea
 * Exercise on timing in Javascript
 * 
 * Write two functions that based on the current date and time output the number
 * of seconds:
 * getSecondsToday() returns the number of seconds from the beginning of
 * today.
 * getSecondsToTomorrow() returns the number of seconds till tomorrow.
 */

function getSecondsToday() {
    let rightNow = new Date();
    let midnightSameDay = new Date();
    midnightSameDay.setUTCHours(00,00,00,00);
    let tMFromMidnight = rightNow.getTime() - midnightSameDay.getTime();
    let secondsFromMidnight = new Date(tMFromMidnight);
    return secondsFromMidnight.getTime()/1000;
}

function getSecondsToTomorrow() {
    let rightNow = new Date();
    let midnightTomorrow = new Date();
    midnightTomorrow.setUTCDate(rightNow.getDate()+1);
    midnightTomorrow.setUTCHours(00,00,00,00);
    let tMToTomorrow = midnightTomorrow.getTime() - rightNow.getTime();
    let secondsToMidnight = new Date(tMToTomorrow);
    return secondsToMidnight/1000;
}

console.log(getSecondsToday());
console.log(getSecondsToTomorrow()); 
