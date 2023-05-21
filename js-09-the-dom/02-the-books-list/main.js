/**
 * @file: main.js
 * @author: Alvise Spadea
 * Exercise on dom in Javascript
 * In JavaScript:
 * Create a complete webpage with a title, description and all other HTML tags
 * In the body add an h1 title of "My Book List"
 * In javascript, iterate through the array of books.
 * For each book, create HTML element with the book title and author and append it to the
 * page
 * Use a ul and li to display the books
 * Add a url property to each book object that contains the cover image of the book
 * Add the image to the HTML using Javascript
 * Using javascript change the style of the book depending on whether you have read it or not
 * Add an external css file that applies after 5 seconds
 * Now change the style of the book depending on whether you have read it or not using both
 * css and javascript (the CSS should use a different color for read books)
 * 
 */
let books = [
    {
        title: 'The Design of EveryDay Things',
        author: 'Don Norman',
        alreadyRead: false
    },
    {
        title: 'The Most Human Human',
        author: 'Brian Christian',
        alreadyRead: true
    },
    {
        title: 'The Foundation',
        author: 'Isaac Asimov',
        alreadyRead: true
    },
    {
        title: 'The Historian\'s Craft',
        author: 'Marc Bloch',
        alreadyRead: false
    },
    {
        title:'The Hitchhiker\'s Guide to the Galaxy',
        author:'Douglas Adams',
        alreadyRead: false
    }
];

let body = document.body;
let head = document.head;
let i = 0;
let ul = document.createElement('ul');
body.appendChild(ul);
const imagesURL = [
    'https://m.media-amazon.com/images/I/416Hql52NCL.jpg',
    'https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg',
    'https://m.media-amazon.com/images/I/81xqnfgEVRS.jpg',
    'https://m.media-amazon.com/images/I/81Ipdy263NL.jpg',
    'https://kbimages1-a.akamaihd.net/aa60f6f0-1a2e-4527-aed3-1c35ea607532/1200/1200/False/the-ultimate-hitchhiker-s-guide-to-the-galaxy-1.jpg'
];
books.forEach(element => {
    let li = document.createElement('li');
    let title = document.createElement('h2');
    let author = document.createElement('h3');
    title.textContent = books[i].title;
    author.textContent = books[i].author;
    li.appendChild(title);
    li.appendChild(author);
    ul.appendChild(li);
    books[i].url = imagesURL[i];
    let bookCover = document.createElement('img');
    bookCover.alt = 'cover-'+ books[i].title;
    bookCover.src = imagesURL[i];
    bookCover.width = 200;
    li.appendChild(bookCover);
    if (books[i].alreadyRead) {
        li.style.backgroundColor = 'green';
        let gifNoice = document.createElement('img');
        gifNoice.src = 'https://media.tenor.com/pEtOxcxh_xUAAAAC/noice-michael-rosen.gif';
        gifNoice.alt = 'gif-noice';
        li.appendChild(gifNoice);
    }else{
        li.style.backgroundColor = 'red';
        let gifDisappointed = document.createElement('img');
        gifDisappointed.src = 'https://i.gifer.com/2Bz.gif';
        gifDisappointed.alt = 'gif-disappointed';
        li.appendChild(gifDisappointed);
    }
    i++;
});

let css = document.createElement('link');
css.href ='style.css';
css.rel ='stylesheet';
setTimeout(()=>{head.appendChild(css);},4000,css);