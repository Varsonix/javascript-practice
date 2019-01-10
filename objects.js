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

/*
Re-assigning properties of objects and deleting properties of an object.
*/
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship['color'] = 'glorious gold';
spaceship.numEngines = 8;
delete spaceship['Secret Mission'];

/*
Utilizing methods (functions within objects) and invoking them.
*/

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat: function(){
    console.log(retreatMessage);
  }, // don't forget the comma, super important for seperating property/values.
  takeOff: function(){
    console.log(`Spim... Borp... Glix... Blastoff!`);
  } // except for the last one in an object.
};
// Invoking methods objectName.method(args);
alienShip.retreat();
alienShip.takeOff();
