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

// an instance of a Do...While loop. This snippet intends to make sure we at least increment cupsAdded by 1 at least ONCE
// and then follow the while comparison (cupsAdded < cupsOfSugarNeeded). If you change the conditional in while to false, we should still
// see cupsAdded = 1 when logged to the console.
const cupsOfSugarNeeded = 3;
let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);


/*
This section goes over using break within a for loop. Here, we have an array of rappers. We create a for loop to iterate through this
array. But each time the array is iterated, it checks to see if the current value of the array's index is 'Notorious B.I.G.'. If this
condiontial comes back true, we break the code. So it should stop logging each index once it logs Notorious B.I.G.
*/
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Begin for loop to iterate through array.
for (let i=0; i<rapperArray.length; i++){
  console.log(rapperArray[i]);
  // Here is where we check for the index and break if true.
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log(`And if you don't know, now you know.`);

/*
More iteration practice and random coding
*/
let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// Basic iteration through the array using for
for (let i = 0; i < groceryList.length; i++){
  console.log(groceryList[i]); 
}

// Basic iteration through the array using while
let indexTest = 0;
  
while (indexTest < groceryList.length){
  console.log(groceryList[indexTest]);
  indexTest++;
}

// I tried to make a do / while loop that would continously change indexValue to the randomly generated index of groceryList
// until indexValue was 'bananas'. Then it would break.
let indexExtra = 0;
let indexValue;

do {
  indexValue = groceryList[Math.floor(Math.random() * 6)];
  console.log(indexValue);
}	while (indexValue !== 'bananas');
