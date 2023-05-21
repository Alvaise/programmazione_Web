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
let i = 0;
let ul = document.createElement('ul');
body.appendChild(ul);
const imagesURL = [
    'https://m.media-amazon.com/images/I/416Hql52NCL.jpg',
    'https://m.media-amazon.com/images/I/71HMyqG6MRL.jpg',
    'https://m.media-amazon.com/images/I/81xqnfgEVRS.jpg',
    'https://m.media-amazon.com/images/I/81Ipdy263NL.jpg'
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