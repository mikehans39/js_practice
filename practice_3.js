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