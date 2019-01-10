/*
This was a project to create a miniature linter program. The goal was to use iterations and tools to do a multitude of things to improve
the paragraph and gather some information regarding it.
*/

// Our initial story.
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Here we turn the story array into an array of words instead of characters.
let storyWords = story.split(' ');

// We use this to filter out the words from unnecessaryWords array.
const betterWords = storyWords.filter((word) => {
  if (unnecessaryWords.includes(word) === false){
    return word;
  }
});

// defining 3 variables to be used in an iteration counter.
let reallyUsed = 0;
let veryUsed = 0;
let basicallyUsed = 0;


// I wrote this out twice because I wanted to see if I could. Both tested out fine.
// This iterates through every word in betterWords[] and checks if it is one of the words in overusedWords. If so, add 1 to the counter.
betterWords.forEach(word => {
    if (word === overusedWords[0]){
    reallyUsed++;
  }	else if (word === overusedWords[1]){
    veryUsed++;
  }	else if (word === overusedWords[2]){
    basicallyUsed++;
  }
});

/*
for (let i=0; i < betterWords.length; i++){
  if (betterWords[i] === overusedWords[0]){
    reallyUsed++;
  }	else if (betterWords[i] === overusedWords[1]){
    veryUsed++;
  }	else if (betterWords[i] === overusedWords[2]){
    basicallyUsed++;
  }
}
*/

// This section iterates through betterWords and looks for periods and exclamation points. It looks through
// the last index (word.length - 1) of each word and checks if it's a '.' or '!'. if so, +1 to sentences.
let sentences = 0;
betterWords.forEach( word => {
  if (word[word.length - 1] === '.' || word[word.length - 1] === '!'){
    sentences += 1;
  }
})

// I was asked to log all this information so I tried fitting it all into 1 function. I could have just as easily
// logged each one individually, but this was for practice.
function informationLog(word, sentence, really, very, basically){
  console.log(`Word Count: ${word}`);
  console.log(`Sentence Count: ${sentence}`);
  console.log(`Times really was used: ${really}`);
  console.log(`Times very was used: ${very}`);
  console.log(`Times basically was used: ${basically}`);
};
// Called afformentioned function.
informationLog(betterWords.length, sentences, reallyUsed, veryUsed, basicallyUsed);
// Printed the final story out as a single string. 
console.log('');
console.log(betterWords.join(' '));
