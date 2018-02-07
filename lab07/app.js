'use strict';

function Question(questionText, category) {
    this.text = questionText;
    this.category = category;
    this.parentId = category + '-questions';

    this.answer = null;
}

// prompt for answer
// save it
Question.prototype.ask = function() {
    this.answer = prompt(this.text);
}

// put it on the DOM
Question.prototype.render = function () {
    // find parent


    // create element


    // append child to parent
}



const questionOne = new Question('What time is it?', 'yes');
console.log(questionOne);

questionOne.ask();

console.log(questionOne);



// constructor function
function Book(title, author, hasRead) {
    this.title = title;
    this.author = author;
    this.hasRead = hasRead;

    // // THIS IS THE WRONG WAY TO ADD METHODS
    // this.markRead = function() {
    //     this.hasRead = true;
    // }
}

const book7 = new Book('alice', 'lewis', false);

console.log(book7);

// THIS IS THE RIGHT WAY TO ADD METHODS

Book.prototype.createLi = function () {
    const li = document.createElement('li');
    li.textContent = this.title + ' by ' + this.author;
    return li;
}

// DIY constructor function. Not a real CF; it's forced
function createBook (title, author, hasRead) {
    const newBook = {
        title: title,
        author: author,
        hasRead: hasRead,
        markAsRead: function () {
            this.hasRead = true;
        },
        createLi: function () {
            const li = document.createElement('li');
            li.textContent = this.title + ' by ' + this.author;
            return li;
        }
    }
    return newBook;
}

const bookZero = createBook('title', 'author', true);
console.log(bookZero);

const book = {
    title: 'Little Goose',
    author: 'Big Goose',
    hasRead: false,
    markAsRead: function () {
        // will change hasRead to true
        this.hasRead = true;
    },
    createLi: function () {
        // will return a li with the book's info
        const li = document.createElement('li');
        li.textContent = this.title + ' by ' + this.author;
        return li;
    }
};

const book2 = {
    title: 'Little Bear',
    author: 'Big Bear',
    hasRead: true,
    markAsRead: function () {
        // will change hasRead to true
        this.hasRead = true;
    },
    createLi: function () {
        // will return a li with the book's info
        const li = document.createElement('li');
        li.textContent = this.title + ' by ' + this.author;
        return li;
    }
};

const book3 = {
    title: 'Little Rabbit',
    author: 'Big Rabbit',
    hasRead: false,
    markAsRead: function () {
        // will change hasRead to true
        this.hasRead = true;
    },
    createLi: function () {
        // will return a li with the book's info
        const li = document.createElement('li');
        // li.textContent = this.title + ' by ' + this.author;
        li.textContent = `${this.title} by ${this.author}`;
        return li;
    }
};

const books = [book,book2,book3];
for (let i = 0; i < books.length; i++) {
    renderBook(books[i]);
}

function renderBook (book) {
    // let listId = 'to-read';
    // if (book.hasRead) listId = 'read';

    const listId = book.hasRead ? 'read' : 'to-read';
    const list = document.getElementById(listId);
    const li = book.createLi();

    list.appendChild(li);
}


/*
    instead of title lists, make table:

    book title | author | has read 


    - if not yet read, put at top of the table get first child or tbody, and use insertAfter; otherwise append
    - also if not yet read: give class of "not-read" and bg color in css of green
    - also, put an emoji in has read (maybe a random one from an array?)


    - maybe calculate the estimated length of time it would take to read?
*/