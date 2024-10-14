console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
// Create an empty array named `myCollection`.
let myCollection = [];

// Create a function named `addToCollection`. It should have this basic structure:
// - Create a new object having the above properties.
// - *NOTE*: Your object's properties **must** have `title`, `artist`, and `yearPublished` in order for this assignment's automated tests to work correctly!
// - Add the new object to the end of the `collection` array.
// - `return` the newly created object.


function addToCollection(collection1, title1, artist1, yearPublished1) {
  const cd = {
    title: title1,
    artist: artist1,
    yearPublished: yearPublished1,
  };
  collection1.push(cd);
  return cd;
} 
addToCollection(myCollection, 'Fireflies', 'Owl City', 2009)
addToCollection(myCollection, 'Moon', 'Pluto', 2012)
addToCollection(myCollection, 'soon', 'Pluto', 2012)
addToCollection(myCollection, 'doon', 'Pluto', 2012)
addToCollection(myCollection, 'roon', 'Pluto', 2012)
addToCollection(myCollection, 'boon', 'Pluto', 2012)
console.log(myCollection);

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
