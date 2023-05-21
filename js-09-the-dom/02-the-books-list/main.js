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
    }
];

let body = document.body;
let head = document.head;
let i =0;
let ul = document.createElement('ul');
body.appendChild(ul);
books.forEach(element => {
    let li = document.createElement('li');
    let title = document.createElement('h2');
    let author = document.createElement('h3');
    title.textContent = books[i].title;
    author.textContent = books[i].author;
    i++;
    li.appendChild(title);
    li.appendChild(author);
    ul.appendChild(li);
    
});