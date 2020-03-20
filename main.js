let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

  // making an array of words from the story
let storyWords = story.split(" ");

  // function to count the number of words present in the array storyWords
let wordCounter = (arr) => {
  return `This story is made of ${storyWords.length} words.`;
};

  // an array made of the most significant words
const betterWords = storyWords.filter(word => {
  return word.length > 3;
}).sort();

  // function to count how many sentences the story is made of
let sentenceNum = (arr) => {
  let sentences = 0;
  arr.forEach((elem) => {
    let regex = /\./;                                           // every time you fing a period
    if ( regex.test(elem) ) sentences +=1;                      // increase the sentences counter by 1
  })
  return `The paragraph is made of ${sentences} sentences.`;    // return the number of sentences
}

  // function to print the times the overused words are used at the end of the forEach cycle
  // it compares two arrays
let overusedTimes = (arr1, arr2) => {                          // this takes as arguments the arrays to compare
  for ( let i = 0; i < arr1.length; i++ ) {                    // comparing each word from the 1st array...
    for ( let j = 0, counter = 0; j < arr2.length; j++ ) {     // ...with each words in the 2nd array
      if ( arr1[i] === arr2[j] ) counter +=1;                  // if they are the same, increase the counter
      if (storyWords[j] === arr2[arr2.length-1] ) {            // if this is the last word of the 2nd array...
        console.log( `The word "${arr1[i]}" was used ${counter} times` )  // ...print how many times it was used and move on to the next word
      }}}}

  // function that logs all the info held in the wordCounter, sentenceNum and overusedWords functions
function storyMiniLinter (arr) {
  console.log(wordCounter(arr));
  console.log(sentenceNum(arr));
  overusedTimes(overusedWords, storyWords);
}

  // calling storyMiniLinter to get info from the story
storyMiniLinter(storyWords);

  // function to replace the overused words with empty spaces
let test = storyWords.map( word => {
  if ( word == "really" || word == "very" || word == "basically" ) {
          return "___";
    }
   else return word;
})

console.log(test.join(" "));



// let replaceOverusedWords = arr => {
//   let fixedStory = [];
//     for ( let i = 0; i < overusedWords.length; i++ ) {
//       console.log("COMPARING " + overusedWords[i]);
//       for ( let j = 0; j < storyWords.length; j++ ) {
//         console.log("COMPARING " + storyWords[j]);
//         if ( overusedWords[i] === storyWords[j] && fixedStory.indexOf(storyWords[j]) === -1) {
//           fixedStory.push(storyWords[j]);
//         } else if ( overusedWords[i] === storyWords[j] && fixedStory.indexOf(storyWords[j]) != -1) {
//           fixedStory.push("___");
//         } else if ( overusedWords[i] != storyWords[j] && fixedStory.indexOf(storyWords[j]) === -1 )
//           fixedStory.push(storyWords[j]);
//       }
//     }
//   return(fixedStory.join(" "));
// }

// console.log(replaceOverusedWords(storyWords));
