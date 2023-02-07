"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavani 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rissoto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 4,
    mainIndex = 1,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log("==========================================================");
console.log("PART 9 - 106");

/*
console.log("PART 9 - 103");

// destructuring arr
const arr = [18, 3, 8];

const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//DESRTRUCTURING Restaurant array
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// switching variables

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);


[main, secondary] = [secondary, main];
console.log(main, secondary);

//Reiceve 2 return values from a function
const [stater, mainCourse] = restaurant.order(3, 1);
console.log(stater, mainCourse);

// array in array
const nested = [3, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// default values
const [p = 1, m = 1, y = 1] = [8, 9];
console.log(p, m, y);
*/
/** 
console.log("==========================================================");
console.log("PART 9 - 104");
// destructuring object
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//default values
const { menu = [], starterMenu = [] } = restaurant;
console.log(menu, starterMenu);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 13 };
({ a, b } = obj);
console.log(a, b);

// nested
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// detructoring functions
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 3,
});

restaurant.orderDelivery({
  address: "Via del Sole, 225",
  mainIndex: 1,
});
*/

/** 
console.log("==========================================================");
console.log("PART 9 - 105: The Spread Operator");

//SPREAD, BECAUSE ON RIGHT SIDE OF =
const arr = [1, 2, ...[3, 4]];

//REST, BECAUSE ON LEFT SIDE OF =
const [l, n, ...others] = [1, 2, 3, 4, 5];
console.log(l, n, others);
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
//Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);
// Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushrooms");
// const xx = [18, 19, 22];
// add(...xx);
/**THE SPREAD OPERATOR(...)
const arr = [4, 5, 6];
const newArr = [1, 2, 3, ...arr];
console.log(newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Join 2 arrays
const newMenu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(newMenu2);

//Interables: arrays, strings, maps, sets. Not objects
const str = "Jonas";
const letters = [...str, "", "S."];
console.log(letters);
console.log(...str);

const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];
console.log(ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);
//Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
