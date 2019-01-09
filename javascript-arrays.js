// First ever Array
const hobbies = ['Coding', 'Guitar', 'Gaming'];
console.log(hobbies);

// Simple array creation with strings.
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

//listItem contains the 1st item in the famousSayings Array.
const listItem = famousSayings[0];

// logging listItem will log the first item of famousSayings.
console.log(listItem);
console.log(famousSayings[2]); // logs the 3rd item from the famousSayings array.
console.log(famousSayings[3]); // Logs undefined because there is no item in the 4th slot.

let groceryList = ['bread', 'tomatoes', 'milk'];
// Re-assigning the value in a specific spot in an array.
groceryList[1] = 'avocados';

// Re-defining more arrays
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
condiments[0] = 'Mayo';
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
// Logging the length of the array.
console.log(objectives.length);
