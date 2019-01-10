/*
This file covers my iterator lessons through javascript. Enjoy.
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
