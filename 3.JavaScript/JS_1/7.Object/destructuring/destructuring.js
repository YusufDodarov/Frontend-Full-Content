// destructuring
let numbers = {
  x: 19,
  y: 22,
  z: 12,
};
let { x, z } = numbers;
console.log(x, z);

// task2
let students = {
  firstName: "Yusuf",
  lastName: "Dodarov",
  age: 16,
  adress: "Arbobkhotun",
};
let { firstName, lastName } = students;
console.log(firstName, lastName);
let { firstName: Mypop } = students;
console.log(Mypop);
