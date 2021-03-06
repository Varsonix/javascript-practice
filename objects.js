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

/*
Playing with functions to re-assign properties of objects.
*/
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
function greenEnergy(obj){
  obj['Fuel Type'] = 'avocado oil';
}

function remotelyDisable(obj){
  obj.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);

/*
Using for loops to iterate through a list of objects.
*/

let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}

/*
Understanding 'this'.
Here, we create an object called robot, and assign it two properties and a method.
If i were to try to call the properties by themselves within the method. I would get an error.
this.property will help to referrence the calling object.
*/
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    // this.model will tell the method I am calling 'robot.model' and 'robot.energyLevel'.
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};
// Logging the results of calling robot.provideInfo().
console.log(robot.provideInfo());

/*
Using getters in js. here we have an _energyLevel: 100, and a get energyLevel ().
This will check if this._energyLevel is a number or not.
if it's a number. display that formatted.
*/
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel (){
    if (typeof this._energyLevel === 'number'){
      return 'My current energy level is ' + this._energyLevel;
    }
    else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
};
// Calling our getter.
console.log(robot.energyLevel);

/*
Practicing getter and setter methods. We set a get and set of numOfSensors to get and or set the number of sensors (_numOfSensors)
when we use the methods. they check conditionals and execute blocks of code based on those conditionals.
*/
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    }	else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }  
};
// Using the setter in action to set _numOfSensors to 100.
robot.numOfSensors = 100;
// Using the getter to see what _numOfSensors is now.
console.log(robot.numOfSensors);
// Double checking by looking directly at _numOfSensors.
console.log(robot._numOfSensors);

/*
Here, we are learning about creating a function that returns objects and utilizes the parameters given to help supply the data.
we take a model and mobile (boolean) to create an object (that we name later with const) and assign it's model and mobile funcitonality.

*/
// Using function notation.
function robotFactory(model, mobile) {
  return {
    model: model,
    mobile: mobile,
    // creating a method to log something.
    beep: function(){
      console.log('Beep Boop');
    }
  }
}

// Using short-hand
/*const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep(){
      console.log('Beep Boop');
    }
  }
}*/
// Using our new function in action!
const tinCan = robotFactory('P-500', true);
tinCan.beep();

// If the key is the same name as the parameter, we can use
// property value shorthand
const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}
// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

/*
Here we go over using short-hand to extract values from objects.
*/
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
// How we would have normally done this before short-hand.
/*
const functionality = robot.functionality;
functionality.beep();
*/

// You can think of functionality here as the object that was pulled
// out of robot.functionality. 
const { functionality } = robot;
functionality.beep();

/*
Using built-in object methods such as Object.keys() to get all the property names.
Object.entries(); to get all the properties and values as an array.
Object.assign(target, source); to copy the source object keys into the target object (with additional choices if you fill in the tar)
*/
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);

// Random challenges applied to myself.
// Find the value of this within a function of an object.
const object1 = {
  name: 'Jordan',
  styleName: function() {
    console.log(this);
  }
}

object1.styleName();

// Find the outcome of using a property with the exact same name as a getter or setter.
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  numOfSensors: 15, // this was originally _numOfSensors (as well as inside all the methods)
  get numOfSensors(){
    if(typeof this.numOfSensors === 'number'){
      return this.numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this.numOfSensors = num;
    }	else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }  
};

robot.numOfSensors = 100; // Maximum call stack size exceeded.


console.log(object2.nameIs('Jordan')) // 
console.log(object2.nameIs);

// Use a factory function to create an object of my choosing. 
const objectFactory = (name, age, height, weight, hairColor) => {
  return {
    name,
    age,
    height,
    weight,
    hairColor,
    greet: function(){
      console.log(`Hi! My name is ${this.name}`);
    }
  }
}

const jordanGibbard = objectFactory('Jordan', 29, 116, 230, 'Brown'); // No matter what, this will always add the greet: function.
console.log(Object.entries(jordanGibbard));
jordanGibbard.greet();
