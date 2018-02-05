'use strict';
/*
// properties
  - title
  - author
  - length (number)
  - copyright date
  - genre
  - publisher
  - has read (boolean)
  - favorite (boolean)

// method
  - markAsRead()
  - markAsFavorite()
  - update()
*/

const bookOne = {
  title: 'Little Goose',
  author: 'Big Goose',
  hasRead: false,
  markAsRead: function () {
    // will mark the book as read
    this.hasRead = true;
  },
  createLi: function () {
    // will return a li with the book's info
    const li = document.createElement('li');
    li.textContent = this.title + ' - ' + this.author;
    return li;
  }
}

const bookTwo = {
  title: 'Little Goose',
  author: 'Big Goose',
  hasRead: false,
  markAsRead: function () {
    // will mark the book as read
    this.hasRead = true;
  },
  createLi: function () {
    // will return a li with the book's info
    const li = document.createElement('li');
    li.textContent = this.title + ' - ' + this.author;
    return li;
  }
}

const bookThree = {
  title: 'Little Goose',
  author: 'Big Goose',
  hasRead: true,
  markAsRead: function () {
    // will mark the book as read
    this.hasRead = true;
  },
  createLi: function () {
    // will return a li with the book's info
    const li = document.createElement('li');
    // li.textContent = this.title + ' - ' + this.author;
    li.textContent = `${this.title} by ${this.author}`;
    return li;
  }
}

const books = [bookOne, bookTwo, bookThree];

for (let i = 0; i < books.length; i++) {
  renderBook(books[i]);
};

function renderBook (book) {
  let listId = 'to-read';
  if(book.hasRead) {listId = 'read'};

  const list = document.getElementById(listId);
  const li = book.createLi();

  list.appendChild(li);
}
