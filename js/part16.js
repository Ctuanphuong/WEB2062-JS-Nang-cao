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
// dùng set thì các value có tên giống nhau sẽ không được lặp lại
const ordersSet = new Set(["Pasta", "Pizza", "Risotto"]);
console.log(ordersSet);
console.log(new Set("Jonas"));
// kiểm tra kích thước của mảng OrdersSet
console.log(ordersSet.size);
// kiểm tra xem 1 phần tử có tồn tại trong mảng đó không:
console.log(ordersSet.has("Pasta"));
console.log(ordersSet.has("Bread"));
// add thêm 1 phần tử vào mảng
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
console.log(ordersSet);
// xóa 1 phần tử trong mảng
ordersSet.delete("Risotto");
//Xóa tất cả các phần tử trong 1 tập hợp
// ordersSet.clear();
console.log(ordersSet);
for (const order of ordersSet) console.log(order);

//example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "waiter", "Manager", "Chef", "Waiter"]).size
);
console.log(new Set("JonasSchmedtmann").size);
