/*
Will comment all of this soon.
*/

const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizersIn) {
      this._appetizers.push(appetizersIn);
    },
    get mains() {
      return this._mains;
    },
    set mains(mainsIn) {
      this._mains.push(mainsIn);
    },
    get desserts () {
      return this._desserts;
    },
    set desserts (dessertsIn) {
      this._desserts.push(dessertsIn);
    }
  },
  get courses (){
		return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this._courses[courseName] = dish ;
  },
  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}`;
  }
  
}

menu.addDishToCourse('appetizers', 'ceasar salad', 4.50);
menu.addDishToCourse('appetizers', 'potato', 1);
menu.addDishToCourse('appetizers', 'chips and salsa', 3);
menu.addDishToCourse('appetizers', 'apple slices', 1.30);
menu.addDishToCourse('appetizers', 'texas fries', 5.75);
menu.addDishToCourse('mains', 'country fried steak', 8.75);
menu.addDishToCourse('mains', 'Hamburger', 4.59);
menu.addDishToCourse('mains', 'hot wings', 9.50);
menu.addDishToCourse('mains', 'full rib dinner', 16.35);
menu.addDishToCourse('mains', 'salmon dinner', 11.35);
menu.addDishToCourse('desserts', 'maracarons', 4.45);
menu.addDishToCourse('desserts', 'ice cream sandiwch', 2.45);
menu.addDishToCourse('desserts', 'choco chip cookie', 1.75);
menu.addDishToCourse('desserts', 'sundae', 4.25);
menu.addDishToCourse('desserts', 'apple pie', 5.00);

let meal = menu.generateRandomMeal();

console.log(meal);
