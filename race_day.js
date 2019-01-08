/*
This project was to further drive home control flow and multiple conditionals for if/else if/ else statements.
We also use operator assignments here as well as more string interpolation. 
*/

// Our randomizer to create a number between 1-1000
let raceNumber = Math.floor(Math.random() * 1000);

// These variables are meant to be changed at this location for testing of the control flow
const racerEarly = false;
const runnerAge = 18;

// This block is to ensure that racers who are adults (>18) AND early (racerEarly = true) are given a number above 1000.
if (runnerAge > 18 && racerEarly){
  raceNumber += 1000;
}

// Responses based on control flow -- Utilizing bang operator --
if (runnerAge > 18 && racerEarly){
  console.log(`Your number is ${raceNumber}. You will race at 9:30AM`);
}	else if (runnerAge > 18 && !racerEarly){
  console.log(`Your number is ${raceNumber}. You will race at 11:00AM`);
} else if (runnerAge < 18){
  console.log(`Your number is ${raceNumber}. You will race at 12:30PM`);
}	else{
  console.log(`Please see the registration desk for race times. Your number is ${raceNumber}`);
}
