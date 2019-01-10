/*
Here, we are assigning a function into a variable to reference the function to save typing it multiple times.
*/
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}
const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();

console.log(is2p2.name);

/*
Alright, this one is going to be a bit tricky to go over. there may be more commentary than code haha!
Here, we are making examples of higher-level functions and calling functions using functions as parameters and it's extremely easy
for me to get lost here. I'm going to label this as my hardest subject so far. 
*/

// Here, we pull from our last example of long code, but we're not using 'shortening the name' as the reason this time.
// We're just going to call it later within a function.
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Quick concise function created 
const addTwo = num => num + 2;

/* Original notation.
const addTwo = (num) => {
  num + 2;
}*/

/*
From what I can gather, I don't know the entire purpose of this function outside of nesting this little function call within it for the 
purpose of the exercise.
All it does is enumerate the date (1547097777333 at the time of writing), twice, and then subtract them from each other. 
*/
const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter(); // ---This part () will be important to remember going into the calling of the function later as a parameter.---
  let t2 = Date.now();
  return t2 - t1;
};

// Here, we are creating a variable to save the function using the parameter as the first function. Remember that () I talked about earlier?
// You CANNOT invoke this TwoPlusTwo function within the parameter, because then you're doubling up on the (). At least I think that's the reason.
let time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

/*
Here, we have created a function with 2 parameters (func, value) that will run the function with the value as the parameter twice.
and if the result is the same, to return the first function. if not, return a string explaining.
The func will be the addTwo function from earlier, the value will be num. This means that the function called within the function will be
effectively 'addTwo(num)' once it goes. So if you call checkConsistentOutput(addTwo, 3). it will call addTwo(3) twice. 
This is extremely awkward for me but I'm slowly understanding it.
*/
const checkConsistentOutput = (func, value) => {
	let firstTry = func(value);
  let secondTry = func(value);
  if (firstTry === secondTry){
    return firstTry;
  }	else {
    return 'This function returned inconsistent results';
  }
};

// Log the output of this function, which calls functions. Good times.
console.log(checkConsistentOutput(addTwo, 4));


