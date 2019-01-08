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
