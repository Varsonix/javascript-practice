// My first for loop within Javascript.

for (let counter = 5; counter < 11; counter++) {
  console.log(counter); //Will print 5, 6, 7, 8, 9, 10.
} 

// Running the same style loop, but running it backwards.

for (let counter = 10; counter >= 5; counter--) {
  console.log(counter); // Will print 10, 9, 8, 7, 6, 5
}


// Looping through an array (defined below)
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++){
  console.log(`I would love to visit ${vacationSpots[i]}!`);
}

// Creating a for loop to handle multiple arrays (nested for loop)
const bobsFollowers = ['Fred', 'Mike', 'Clarissa', 'Jean'];
const tinasFollowers = ['Fred', 'Mike', 'Alphonso'];
const mutualFollowers = [];

// For each time that this code iterates through bobsFollowers, each instance, it will fully run through tinasFollowers[];
for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    // When it finds that two indexes match, it will push it into my 3rd varaiable array.
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

// Testing the code, recieved 'Fred] and 'Mike' in the 3rd array.
console.log(mutualFollowers);

/* 
Creating a while loop to endlessly pick one of the 4 indexes in the array cards[] and assign it to currentCard until 
spade is assigned and the while loops sees that currentCard === 'spade' and stops the while loop. the console.log
is there to show me the different kinds of outputs thanks to the randomiser in the while loop.
*/
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

let counter = 0;
while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}
