
// This is a globally accessible variable
const city = 'New York City';

const logCitySkyline = () => {
  // This is a local variable within this function.
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());

// console.log(skyscraper); would generate RefernceError: not defined.
// Because we're trying to access it from outside the block of code.

// Creating 3 global variables 
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

// We create a function (which will have a block of code in it)
const callMyNightSky = () => {
  // Here we are pulling global variables inside of our function.
  return `Night Sky: ${satellite}, ${stars}, and ${galaxy}`;
}

/*
When we call this function, it will be able to use the three variables
used inside of it, becuase they are global variables, and are available to all lines of code.
*/
console.log(callMyNightSky());
