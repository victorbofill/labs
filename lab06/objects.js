/*
Creating objects 
*/

// properties
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

// methods
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

/* Accessing properties and methods */
const songs = ['one two three', 'blue cows', 'remote control'];
console.log(songs[1]); //'blue cows'

thirdSong['title'];
console.log((thirdSong['title']));

thirdSong.title;
console.log(thirdSong.title);

// Changing properties
thirdSong.lyrics = 'lyrics lyrics lyrics';
console.log(thirdSong.lyrics);

// Executing methods
thirdSong.sing();

/* Accessing its own properties with the all dreaded *this* */



/* 
    The Document Object Model (DOM) 
*/
/* referencing existing html elements  */


/* creating new elements */
// adding them to the DOM