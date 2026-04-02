// Object Constructor
let user = {
  name: "Yusuf",
  age: 16,
  behavior: false,
  phone: 984938343,
};
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.freeze(user));
console.log(Object.assign({}, user, { country: "Tajikistan" }));
console.log(Object.hasOwn(user, "phone"));

// With for loop
// Object key with for loop
// let user = {
//   name: "Yusuf",
//   age: 16,
//   behavior: false,
//   phone: 984938343,
// };
// for (let key of Object.keys(user)) {
//   console.log(key);
// }

// Object value with for loop
// let user = {
//   name: "Yusuf",
//   age: 16,
//   behavior: false,
//   phone: 984938343,
// };
// for (let value of Object.values(user)) {
//   console.log(value);
// }

// Object key with for loop
// let user = {
//   name: "Yusuf",
//   age: 16,
//   behavior: false,
//   phone: 984938343,
// };
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}:${value}`);
// }

// methods functions
// let user2 = {
//   name: "Yusuf",
//   age: 16,
// };
// function greet(greeting) {
//   console.log(`${greeting}, ман ${this.name} ва ман ${this.age} сол дорам`);
// }
// greet.call(user, "Салом");
// greet.apply(user, ["Хуш омадед"]);
// let greetUser = greet.bind(user, "Салом дӯстам");
// greetUser();

