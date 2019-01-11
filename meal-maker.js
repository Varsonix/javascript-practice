const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
    get appetizers(){
      
    },
    set appetizers(appetizerIn){
      
    },
    get mains(){
      
    },
    set mains(mainIn){
      
    },
    get desserts(){
      
    },
    set desserts(dessertsIn){
      
    },
    get courses(){
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts
      }
    }
	},
  addDishToCourse: function(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse: function(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return randomIndex;
  },
  generateRandomMeal: function(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is $${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);


    
  
