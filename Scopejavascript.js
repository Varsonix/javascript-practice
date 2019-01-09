
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

// Creating a function
const logVisibleLightWaves = () => {
  // Defining a LOCAL variable within this block of code. This is NOT global.
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}
// When we call the function, it will display the variable
logVisibleLightWaves(); // Moonlight
// If we try to log just the local variable, we will get an error.
console.log(lightWaves); // ReferenceError


/*
Here we set an example of scope pollution by defining stars as 'North Star', but re-assigining it to 'Sirius' in the function.
This changes the variable globally however, so it is no longer 'North Star'.
*/
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius' // Take note of this.
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

/*
Here we take a practice session in tightly scoping variables.
We define 2 variables within the function, and further-more, when we create an if statement. We re-define the variable within that
code block. Which will not change the variable outside the block so if it is called from the function level, it will remain the same.
*/
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  
  console.log(lightWaves);
};

logVisibleLightWaves();
