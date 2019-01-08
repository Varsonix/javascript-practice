/*
This project was to further drive home control flow and multiple conditionals for if/else if/ else statements.
We also use operator assignments here as well as more string interpolation. 
*/

let raceNumber = Math.floor(Math.random() * 1000);

const racerEarly = false;
const runnerAge = 18;

if (runnerAge > 18 && racerEarly === true){
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
