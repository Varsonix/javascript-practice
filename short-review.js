/*
Exercise 1: Create a function to check whether a person is of legal voting age (18 in this example).
            return true or false.
*/

const canIVote = (age) => {
  if (age >= 18){
    return true;
  }	else {
    return false;
  }
}

console.log(canIVote(19));

/*
Exercise 2: Create a function to test whether two strings are the same, and if so return "You agree!" or "You disagree!"
*/

const agreeOrDisagree = (string1, string2) => {
  if (string1 === string2){
    return 'You agree!';
  }	else{
    return 'You disagree!';
  }
}

console.log(agreeOrDisagree('yes', 'yes'));

/*
Exercise 3: Create a function that takes your age and returns a classification based on your age range (e.g: 0-3 = baby / 4-12 = child)
*/

const lifePhase = (age) => {
  if (age < 0 || age > 140){
    return 'This is not a valid age';
  }
  
  if (age <= 3){
    return 'baby';
  }	else if (age <= 12){
    return 'child';
  }	else if (age <= 19){
    return 'teen';
  }	else if (age <= 64){
    return 'adult';
  }	else if (age <= 140){
    return 'senior citizen';
  }
}

console.log(lifePhase(5); // Should print 'Child'
            
/*
Exercise 4: 
Create a function that takes 3 arguments (grades) 
Checks for validity, averages them, and then returns a grade based on the average within a range. 
*/

const finalGrade = (grade1, grade2, grade3) => {
  // Check grades first for validity.
  // Makes sure none of the grades are above 100 or below 0.
  if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
    return 'You have entered an invalid grade.';
  }
  
  // Calculate the average grade now that we know the grades are valid.
  const average = (grade1 + grade2 + grade3) / 3;
  
  // Return a grade string based upon range that the average falls in.
  // 0-59 = F | 60-69 = D | 70-79 = C | 80-89 = B | 90-100 = A
 if (average >= 0 && average <= 59){
   return 'F';
 }	else if (average >= 60 && average <= 69){
   return 'D';
 } 	else if (average >= 70 && average <= 79){
   return 'C';
 }	else if (average >= 80 && average <= 89){
   return 'B';
 }	else if (average >= 90 && average <= 100){
   return 'A';
 }
}
 console.log(finalGrade(99, 92, 95)); // Should print 'A'

/*
Exercise 5: Create a function that takes two parameters (rank, last name) and return a string using both of those parameters
*/

const reportingForDuty = (rank, lastName) => {
  return `${rank} ${lastName} reporting for duty!`;
}
/* Consice body method ES6

const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`;

*/

console.log(reportingForDuty('Private', 'Fido')); // Prints "Private Fido reporting for duty!'


/*---------

Exercise 7: Create a function with two parameters (weight, planet) that will calculate the weight of an object on a different planet.

*/

// Write your function here:
const calculateWeight = (earthWeight, planet) => {
  // Validate these are going to be a number and a string respectively.
  if ((typeof planet !== "string") || (typeof earthWeight !== "number")){
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
 
  

  // Begin if statements
  if (planet === 'Mercury'){
    return earthWeight * 0.378;
  } else if (planet === 'Venus'){
    return earthWeight * 0.907;
  }	else if (planet === 'Mars'){
    return earthWeight * 0.377;
  }	else if (planet === 'Jupiter'){
    return earthWeight * 2.36;
  }	else if (planet === 'Saturn'){
    return earthWeight * 0.916;
  }	else{
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
  }
}

// Using switch method instead of if/else 
/*
	switch (planet) {
	  case 'Mercury':
 	   return earthWeight * 0.378;
 	 case 'Venus':
 	   return earthWeight * 0.907;
	 case 'Mars':
  	  return earthWeight * 0.377;
	 case 'Jupiter':
 	   return earthWeight * 2.36;
	 case 'Saturn':
 	   return earthWeight * 0.916;
	 default:
 	   return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or	Saturn.';
	}
       }
*/
console.log(calculateWeight(100, 'Jupiter')) // Should print 236

/*

Exercise 9: Truty or falsy. Create a function that quickly checks if a given parameter is truty or falsy

*/
const truthyOrFalsy = value => value ? true : false;

/* Original function, before condensing.

const truthyOrFalsy = (value) => {
  if (value){
    return true;
  } else{
    return false;
  }
}
*/
console.log(truthyOrFalsy(0)); // Should print false
console.log(truthyOrFalsy('Hello!')); // Should print true

/*
Exercise 10: Create a function that calculates (based on how many friends you have) how many of them are imaginary. 
Imaginary friends are always 33% of their real friends.
*/

// 3 Different ways.

// Ultra concise
const numImaginaryFriends = friends => Math.round(0.33 * friends);

/*
const numImaginaryFriends = (friends) => {
  return Math.round(0.33 * friends);
}*/

/* Ridiculously fat code
var numImaginaryFriends = function(friends) {
  const imagine = 0.33
  let finalNumber = Math.round(imagine * friends);
  return finalNumber;
}*/

// Uncomment the line below when you're ready to try out your function
console.log(numImaginaryFriends(18)) // Should print 6
