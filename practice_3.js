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



// Write your code here:

const justCoolStuff = (string1, string2) => {
  return string1.filter(word => string2.includes(word));
}


// Feel free to uncomment the code below to test your function

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]





// Write your code here:

const isVegan = (food) => {
    if(food.source === 'plant'){
      return true;
    } else {
      return false; 
    };
};

const isTheDinnerVegan = meal => {
  return meal.every(isVegan);
}


// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false







const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];


// Write your code here:

const compare = (a, b) => { 
  return a.numTeeth > b.numTeeth;
};

const sortSpeciesByTeeth = list => {
  return list.sort(compare);
  /*list.sort(function(a,b) {
    return a.numTeeth > b.numTeeth;
  });*/
}


// Feel free to comment out the code below when you're ready to test your function!

console.log(sortSpeciesByTeeth(speciesArray))

// Should print [ { speciesName: 'human', numTeeth: 32 },{ speciesName: 'dog', numTeeth: 42 },{ speciesName: 'shark', numTeeth: 50 },{ speciesName: 'alligator', numTeeth: 80 } ]





// Write your code here:

const findMyKeys = list => {
  if(list.filter(word => word ==='keys')) {
    return list.indexOf('keys');
  } else {
    return -1; 
  };
}


// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4






// Write your code here:

const dogFactory = (name, breed, weight) => {
  return {
      _name: name, 
      get name() {
        return this._name;
      },
      set name(name) {
        this._name = name;
      },
      _breed: breed, 
      get breed() {
        return this._breed;
      },
      set breed(breed) {
        this._breed = breed;
      }, 
      _weight: weight,
      get weight() {
        return this._weight;
      },
      set weight(weight) {
        this._weight = weight;
      },
      bark() {
        return 'ruff! ruff!';
      },
      eatTooManyTreats() {
        this.weight = this._weight + 1;
      }
    };
}

console.log(dogFactory('Joe', 'Pug', 27))




