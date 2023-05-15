/**
 * @file: 06-dateago.js
 * @author: Alvise Spadea
 * Exercise on timing in Javascript
 * 
 * Create a function getDateAgo(date, days) that returns the day of the month
 * n days ago from the given date.
 * ● For instance, if today is the 20th, then getDateAgo(new Date(), 1) should be
 * 19th and getDateAgo(new Date(), 2) should be 18th.
 * ● The function should work reliably with any valid Date object. Test it.
 */

function getDateAgo(date,days) {
    return date.getDate()-days;
}

console.log(getDateAgo(new Date(),1));