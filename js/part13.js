"use strict";
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Fri", "Sat"];
const openingHours = {
  [weekdays[2]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 5}`]: {
    open: 0,
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavani 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Rissoto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours,
  orderDelivery({ starterIndex = 4, mainIndex = 1, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPast(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious Pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// regular
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
1;
//WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open || "ko co gio mo cua dau");

const days = ["Sun", "Mon", "Tue", "Wed", "Fri", "Sat"];
for (let d of days) {
  const open = restaurant.openingHours[d]?.open ?? "closed";
  console.log(`On ${d}, we will open at ${open}`);
}
// Methods
console.log(restaurant.order?.(2, 1) ?? "Method does not exist");
console.log(restaurant.orderRisott?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [
  {
    name: "Chu Tuan Phuong",
    email: "ctuanphuong@gmail.com",
  },
];
console.log(users[0]?.name ?? "User array empty");

// if (users.length > 0) console.log(users[0].name);
// else console.log("No users");
