
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
