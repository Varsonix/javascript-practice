/*
This file covers my iterator lessons through javascript. Enjoy.
*/

/*
First lesson goes over .forEach()
*/
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Extremely concise arrow function method. Not a fan, but it works.
fruits.forEach(i => console.log(`I want to eat a ${i}`));

// Another method by defining the function within the forEach(function).
fruits.forEach(function(i){
  console.log(`I want to eat a ${i}`);
});


// Defining a function before-hand and injecting it into the forEach()
function printFruit(i){
  console.log(`I want to eat a ${i}`);
}

fruits.forEach(printFruit);

/*

This exercise goes over how to use the .map() iterator.

*/

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

/* Using ultra-concise arrow notation.
const secretMessage = animals.map(j => j[0]);

//  Using standard arrow notation.
const secretMessage = animals.map(i => {
  return i[0];
});*/

// Using function notation.
const secretMessage = animals.map(function(element){
  return element[0];
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

/* ultra-concise arrow notation.
const smallNumbers = bigNumbers.map(el => el / 100);

// standard arrow notation.
const smallNumbers = bigNumbers.map(el => {
  return el / 100;
});*/

// function notation.
const smallNumbers = bigNumbers.map(function(el){
  return el / 100;
});

console.log(bigNumbers);
console.log(smallNumbers);

/*
This lesson goes over .filter() as a method to iterate through an array and help filter out certain conditions.
such as remove numbers which are < 10.
*/
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

/* --- Ultra Concise Notation ---
const smallNumbers = randomNumbers.filter(number => number < 250);
*/

/* --- Standard Arrow ---
const smallNumbers = randomNumbers.filter(number => {
  return number < 250;
});
*/
// Function notation. We only showcase numbers which are less than 250.
const smallNumbers = randomNumbers.filter(function(number){
  return number < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

/* --- Ultra Concise Notation ---
const longFavoriteWords = favoriteWords.filter(word => word.length > 7);
*/
/* --- Standard Arrow Notation ---
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});
*/
// Function notation. We only showcase words which are longer than 7 characters.
const longFavoriteWords = favoriteWords.filter(function(word){
  return word.length > 7;
});


/*
This lesson goes over using .findIndex() to location an index matching a condition.
*/

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

/* --- Ultra Consice Notation ---
const foundAnimal = animals.findIndex(i => i === 'elephant');
*/
/* --- Arrow notation ---
const foundAnimal = animals.findIndex(i => {
  return i === 'elephant';
});
*/
// This will return the index location of 'elephant'
const foundAnimal = animals.findIndex(function(i){
  return i === 'elephant';
});

const startsWithS = animals.findIndex(function(j){
  // return j[0] === 's'; can be used as well.
   return j.charAt(0) === 's';
});

console.log(startsWithS);

/*
I have a really hard time trying to understand and re-iterate the concept of .reduce()
Supposedly, it takes two arguments, an accumulator, and a currentValue. 
The accumulator starts at the 1st element in an array, and the currentValue starts as the 2nd element in an array.
As .reduce() iterates through the array, 
the return value of the callback function becomes the accumulator value for the next iteration, 
currentValue takes on the value of the current element in the looping process.
*/
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function(accumulator, currentValue) {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

/*
This final recap uses some new array.methods.
.some() and .every()
*/

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];


// This will check if anything in the array has less than 6 characters.
console.log(words.some((word) => {
  return word.length < 6;
}));

// This will filter the words array and add only words with more than 5 characters into interestingWords (new array)
const interestingWords = words.filter((w) =>{
  return w.length > 5;
});


// This will test if all elements in the array pass the given test in the return.
console.log(interestingWords.every((word) => { 
	return word.length > 5;
} ));
