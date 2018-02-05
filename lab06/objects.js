// /*
// Creating objects 
// */

// // properties
const song = {
  title: 'Row Row',
  lyrics: 'row row row your boat gently down the stream',
  length: 300,
  isFavorite: false
};

const songTwo = {
  title: 'ABC',
  lyrics: 'anything but the ABCs',
  length: 100,
  isFavorite: true
};

// // methods
const thirdSong = {
  title: 'Free Bird',
  lyrics: 'a bunch of stuff',
  length: 800,
  isFavorite: true,
  sing: function () {
    alert('this is freebird singing');
    console.log(this.lyrics);
  }
}

// /* Accessing properties and methods */
const songs = ['one two three', 'blue cows', 'remote control'];
console.log(songs[1]); //'blue cows'

thirdSong['title'];
console.log((thirdSong['title']));

thirdSong.title;
console.log(thirdSong.title);

// // Changing properties
thirdSong.lyrics = 'lyrics lyrics lyrics';
console.log(thirdSong.lyrics);

// // Executing methods
thirdSong.sing();

/* Accessing its own properties with the all dreaded *this* */



/* 
    The Document Object Model (DOM) 
*/
/* referencing existing html elements  */

console.log(document);

console.log(document.getElementById('notes'));

const notes = document.getElementById('notes');
console.log(notes);

const h1 = document.getElementsByTagName('h1');
console.log(h1);

const surprise = document.getElementsByClassName('surprise');
console.log(surprise);

const h1Again = document.querySelector('h1');
console.log(h1Again);

const surprisesAgain = document.querySelectorAll('.surprise');
console.log(surprisesAgain);

h1Again.id = 'something';
h1Again.classList.add('surprise');

h1Again.style.color = 'red';

/* creating new elements */
// adding them to the DOM

const newParagraph = document.createElement('p');
newParagraph.textContent = 'floo fla flee';
console.log(newParagraph);

const newImageEle = document.createElement('img');
console.log(newImageEle);
newImageEle.src = '#';
// newImageEle.alt = 'test';
newImageEle.setAttribute('alt', 'testing 123');
let imgAttribute = newImageEle.getAttribute('src');
console.log('image src attribute: ' + imgAttribute);

newImageEle.removeAttribute('src');
imgAttribute = newImageEle.getAttribute('src');
console.log('image src attribute: ' + imgAttribute);

// appendChild, called on an element
notes.appendChild(newParagraph);
newParagraph.appendChild(newImageEle);