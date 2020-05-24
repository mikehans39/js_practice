
let menu = {
  _courses: {
    appetizers: [],
    mains:[] ,
    desserts: [],
  },
  get app() {
    return this._courses.appetizers;
  },
  set app(app) {
    this._courses.appetizers = app;
  },
  get main() {
    return this._courses.mains;
  },
  set main(main) {
    this._courses.mains = main;
  },
  get dessert() {
    return this._courses.desserts;
  },
  set dessert(dessert) {
    this._courses.desserts = dessert;
  },
  get courses() {
    return Object.entries(this._courses)
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    let dish = `${dishName} : ${dishPrice}`;
    if(courseName === 'appetizer') {
      this._courses.appetizers.push(dish);
    }else if (courseName === 'main') {
      this._courses.mains.push(dish);
    }else if (courseName === 'dessert') {
      this._courses.desserts.push(dish);
    } else {
      console.log('course entry was not valid')
    };
  },
  getRandomDishFromCourse(courseName) {
    let dishes = this._courses[courseName];
    let num = Math.floor(Math.random() * dishes.length) ;
    return dishes[num];
  },
  generateRandomMeal() {
   let appetizer = this.getRandomDishFromCourse('appetizers');
   //return appetizer;
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let cost1 = Number(appetizer.split('$')[1]);
    let cost2 = Number(main.split('$')[1]);
    let cost3 = Number(dessert.split('$')[1]);
    let total = cost1 + cost2 + cost3;
    return `Your meal consists of ${appetizer}, ${main}, and ${dessert}, and total cost = $${total}`;
  },
}

menu.addDishToCourse('main', 'steak', '$50');
menu.addDishToCourse('main', 'spagetti', '$10');
menu.addDishToCourse('appetizer', 'calamari', '$8');
menu.addDishToCourse('appetizer', 'bruchetta', '$6');
menu.addDishToCourse('dessert', 'ice cream', '$3');
menu.addDishToCourse('dessert', 'coffee', '$4');
menu.addDishToCourse('dessert', 'cake', '$5');

let meal = menu.generateRandomMeal()

console.log(meal);

//console.log(menu)
