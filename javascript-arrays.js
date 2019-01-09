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

const chores = ['wash dishes', 'do laundry', 'take out trash'];
// Using .push() to add elements to an array
chores.push('eat breakfast', 'play games');

console.log(chores);

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
// Using .pop() to remove the last element from an array.
chores.pop();
console.log(chores);

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//Using shift to remove the FIRST element in an array.
groceryList.shift();
console.log(groceryList);

//using unshift to add an element to the beginning of an array.
groceryList.unshift('popcorn');
console.log(groceryList);
//Using .sclice() to display only the range between 1 and 4.
console.log(groceryList.slice(1, 4));
console.log(groceryList);
// Saving the index of 'pasta' to a variable and logging it.
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// Editing arrays through functions.
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement(newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);

// playing with nested arrays
const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

// our secret message array which we will be modifying
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// This will remove the last entry of the array.
secretMessage.pop();

// This will add 'to' and 'Program' into the array at the end.
secretMessage.push('to', 'Program');

// This will replace 'easily' in the array to 'right'.
// You could also do this with secretMessage[7] = 'right'.
secretMessage[secretMessage.indexOf('easily')] = 'right';

// This will remove an entry at the beginning of the array.
secretMessage.shift();

// This will add an antry at the beginning of the array.
secretMessage.unshift('Programming');

// This will take indexes 6,7,8,9,10 and replace them all with a single entry. 'know'.
secretMessage.splice(6, 5, 'know,');

// This will join all the array strings together, linked via a space ' '.
console.log(secretMessage.join(' '));
