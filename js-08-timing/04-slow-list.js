/**
 * @file: 04-slowlist.js
 * @author: Alvise Spadea
 * Exercise on timing in Javascript
 * 
 * Create an array that holds a list of 30 items (food, books, etc.)
 * Print one item of the list every second until the list is completely printed.
 *   Use setInterval to achieve this goal.
 *   Do the same thing using setTimeout
 */

let itemList =[

     'Laptop',
     'Mouse',
     'Keyboard',
     'Monitor',
     'Printer',
     'Scanner',
     'Headphones',
     'Speakers',
     'Webcam',
     'Microphone',
     'USB drive',
     'hard drive',
     'Power bank',
     'Charger',
     'Cable',
     'Adapter',
     'Router',
     'Modem',
     'Switch',
     'Hub',
     'Antivirus software',
     'Firewall software',
     'Office suite'
];
let i=0;
let timerID=setInterval(()=>{
    console.log(itemList[i]);
    if (i===itemList.length-1) {
         clearInterval(timerID);
    }
    i++;
},1000,i);

function rep(i) {
     let timer= setTimeout(()=>{
          console.log(itemList[i]);
           i++;
           if (i > itemList.length-1) {
               clearTimeout(timer);
               return 0;
           }
           rep(i);
     },1000,i); 
}

rep(0);