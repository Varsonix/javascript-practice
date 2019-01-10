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

/*
Dealing with nested objects. Lession had us assign an array of nested objects to spaceship.passengers.
*/
let spaceship = {
  // How exactly is this working? are the index numbers considered the object names?
  // As in: spaceship.passengers[0] is technically an object? like the actual 0 is the object "essentially passenger1 or something'?
  // and name: is an actual property of [0] essentially? spaceship.passengers[0] is the object and spaceship.passengers[0].name 
  // is the property? is that why you can just start off an empty array with {} brackets? because it's techically already an object?
  passengers: [{name: 'Space Dog'}, 
               {name: 'Mark',hobbies: 'fishing'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
// assigning capFace the value of spaceship.crew.captain['favorite foods'][0] (first index of favorite foods property.
let capFave = spaceship.crew.captain['favorite foods'][0];
// Testing the call for the first index of spaceship.passengers
let firstPassenger = spaceship.passengers[0];
// I did this one to make sure I was doing it right and to understand the whole "array index object name" thing.
console.log(spaceship.passengers[1].hobbies);
