// My first object ever created in javascript 1/10/2019
let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
}

/*
Assigning properites of an object to variables.
Utilizing dot notation to access the properties.
*/
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;

/*
Assigning properties of an object to variables.
Utilizing bracket notation to access the properties.
*/
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

const isActive = spaceship['Active Mission'];
console.log(spaceship['Active Mission']);
