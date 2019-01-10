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

