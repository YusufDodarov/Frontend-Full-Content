// destructuring
// task 1
let arr = [1, 2, 3, 4, 5];
let [a, , b] = arr;
console.log(a, b);

// task 2
let arr2 = [1, 2, 3, 4, 5, 2, 3, 4];
let [a1, , b1, ...c] = arr2;
console.log(c);
