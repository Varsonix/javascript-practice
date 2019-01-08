let userName = 'Jordan';

// Used ternary method to check truthy/falsey on userName
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

/* Non ternary method:

if (userName){
  console.log(`Hello ${userName}`);
} else{
  console.log('Hello!');
}

*/

const userQuestion = 'Will I get good at programming?';

console.log(`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

/* Begin control flow for randomiser -- Switch method -- */
switch (randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Game is broken, Developer please fix this.';
    break;
}

/* begin control flow for randomiser -- if/else method --

if (randomNumber === 0){
  eightBall = 'It is certain';
}	else if (randomNumber === 1){
  eightBall = 'It is decidely so';
}	else if (randomNumber === 2){
  eightBall = 'Reply hazy try again';
}	else if (randomNumber === 3){
  eightBall = 'Cannot predict now';
}	else if (randomNumber === 4){
  eightBall = 'Do not count on it';
}	else if (randomNumber === 5){
  eightBall = 'My sources say no';
}	else if (randomNumber === 6){
  eightBall = 'Outlook not so good';
}	else if (randomNumber === 7){
  eightBall = 'Signs point to yes';
}	else{
  eightBall = "Game broken. Developer please fix.";
}

*/

console.log(`The eight ball answered: ${eightBall}`);
