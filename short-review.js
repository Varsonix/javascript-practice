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

Exercise 3: 
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
