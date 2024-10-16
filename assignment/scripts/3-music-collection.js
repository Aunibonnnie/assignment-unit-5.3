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
addToCollection(myCollection, 'Eternal Sunshine', 'Ariana Grande', 2024)
addToCollection(myCollection, 'The Rise and Fall of a MidWest Princess', 'Chappell Roan', 2023)
addToCollection(myCollection, 'Hot Pink', 'Doja Cat', 2019)
addToCollection(myCollection, 'Guilty Pleasure', 'Jojo Siwa', 2012)
addToCollection(myCollection, 'Justified', 'Justin Timberlake', 2002)
addToCollection(myCollection, 'Baby One More Time', 'Britney Spears', 1999)
console.log(myCollection);


// Create a function named `showCollection`. This function should:
//   - Take in a `collection` parameter. (This allows it to be reused to show any array of album objects).
//   - Loop through the `collection` and `console.log` each album's information formatted **within a single string**, like: `TITLE by ARTIST, published in YEARPUBLISHED`.

function showCollection(collection) {
  for(let i=0; i < collection.length; i++) {
    let cd = collection[i];
    console.log(cd.title + " by " + cd.artist + " published in " + cd.yearPublished);
  }
}
// Use and test the `showCollection` function.
showCollection(myCollection);

// Create a function named `findByArtist`. This function should:
//   - Take in a `collection` parameter. Remember, we want to be able to search any collection!
//   - Take in an `artist` (string) parameter.
//   - Create an empty array to hold any matching results, if any.
//   - Loop through the `collection` and add any album objects with a matching artist to the array.
//   - Return the array with the matching results. (If no results are found, an empty array should be returned).

function findByArtist(collection, artist1) {
  const matchingCd= [];

  for (const cd of collection) {
    if(cd.artist === artist1){
      matchingCd.push(cd);
    }
  } 
  return matchingCd;
}
// Use and test the `findByArtist` function.
//   - Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection.
//   - Check that for artists with multiple matches, all are returned.
console.log(findByArtist(myCollection, 'Ariana Grande'));
console.log(findByArtist(myCollection, 'Chappell Roan'));
console.log(findByArtist(myCollection, 'Doja Cat'));
console.log(findByArtist(myCollection, 'Doja Dog'));

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
