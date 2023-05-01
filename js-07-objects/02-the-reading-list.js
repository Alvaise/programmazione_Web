/**
 * @file: 02-the-reading-list.js
 * @author: Alvise Spadea
 * Exercise on object in Javascript
 * 
 * Create an array of objects, where each object describes a book and has
 * properties for the title (a string), author (a string), and alreadyRead (a
 * boolean indicating if you read it yet).
 * Iterate through the array of books. For each book, log the book title and
 * book author like so: "The Hobbit by J.R.R. Tolkien".
 * Now use an if/else statement to change the output depending on whether
 * you read it yet or not. If you read it, log a string like 'You already read "The
 * Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read
 * "The Lord of the Rings" by J.R.R. Tolkien.
 */

let myReadingList = [
    {
        title: '1984',
        author: 'George Orwell',
        alreadyRead: true
    },
    {
        title: 'Rainbow Six',
        author: 'Tom Clancy',
        alreadyRead: false
    },
    {
        title: 'The Foundation',
        author: 'Isaac Asimov',
        alreadyRead: true
    },
    {
        title: 'The Lord of The Rings',
        author: 'J.R.R Tolkien',
        alreadyRead: false
    },
];

for (let i = 0; i < myReadingList.length; i++) {
    let myBook = myReadingList[i];
    console.log(myBook.title + ' by ' + myBook.author);
}

for (let i = 0; i < myReadingList.length; i++) {
    let myBook = myReadingList[i];
    if (myBook.alreadyRead) {
        console.log('You already read '+myBook.title + ' by ' + myBook.author);
    } else {
        console.log('You still need to read '+myBook.title + ' by ' + myBook.author);
    }
} 