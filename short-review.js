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
