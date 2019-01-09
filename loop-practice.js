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
