/*MEAL MAKER */

const menu = {
  _meal: '',
  _price: 0,

  set meal(mealToCheck) {
    this._meal = typeof mealToCheck === 'string' ? mealToCheck : null;
  },

  set price(priceToCheck) {
    this._price = typeof priceToCheck === 'number' ? priceToCheck : null;
  },

  get todaysSpecial() {
    specialOfTheDayString = (!this._meal && !this._price) ? 'Meal or price was not set correctly!' : `Today's Special is ${this._meal} for $${this._price}!`;
    return specialOfTheDayString;
  }

};

menu.meal = 'Turkey';
menu.price = 10;

console.log(menu.todaysSpecial);