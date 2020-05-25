reverseArray = sent => {
  let newArray = [];
  for(let i = sent.length - 1; i >= 0; i--) {
    newArray.push(sent[i]);
  };
  return newArray; 
}


// When you're ready to test your code, uncomment the below and run:
 
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];




/*
const greetAliens = string => {
  string.forEach((word) => { console.log(`Oh powerful ${word}, we humans offer our unconditional surrender!`)
  });
}
*/
const greetAliens = string => {
  for(i = 0; i < string.length; i++){
    let word = string[i];
    console.log(`Oh powerful ${word}, we humans offer our unconditional surrender!`);
  }
}





// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);



const convertToBaby = line => {
  let newArray = [];
  for (let i = 0; i < line.length; i++) {
    let entry = 'baby ' + line[i];
    newArray.push(entry); 
  }
  return newArray;
}


// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 


const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:

const declineEverything = string => {
  string.forEach(politelyDecline);
}

const acceptEverything = veg => {
  veg.forEach(items => console.log(`Ok, I guess I will eat some ${items}.`));
}

declineEverything(veggies);
acceptEverything(veggies);


const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

const squareNums = numbers => {
  return numbers.map(x => x * x);
}

console.log(squareNums(numbers));




// Write your code here:

const shoutGreetings = string => {
  let newArray = [];
  let newList = string.map(x => x + '!');
  for (let i = 0; i < newList.length; i++) {
    let newItem = newList[i];
    newArray.push(newItem.toUpperCase());
  } 
  return newArray;
}



// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings));
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]






// Write your code here:

const sortYears = list => {
  return list.sort().reverse();
}

// Feel free to uncomment the below code to test your function:

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]









