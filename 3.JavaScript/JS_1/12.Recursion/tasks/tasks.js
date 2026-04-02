// task 1
// function factorial(x) {
//   if (x === 1) return 1;
//   return x * factorial(x - 1);
// }
// console.log(factorial(4));

// task 2
// function sumOddTo(x) {
//   if (x <= 0) return 0;
//   if (x % 2 != 0) {
//     return x + sumOddTo(x - 1);
//   } else {
//     return sumOddTo(x - 1);
//   }
// }
// console.log(sumOddTo(5));// 1 + 3 + 5

// task 3   
// function sum(x) {
//   if (x === 1) return 1;
//   return x + sum(x - 1);
// }
// console.log(sum(5));

// task 4
// function fibonacci(n) {
//   if (n == 0) return 0;
//   if (n === 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// function sumFibonacci(n) {
//   if (n <= 0) return 0;
//   return fibonacci(n - 1) + sumFibonacci(n - 1);
// }
// console.log(sumFibonacci(6));//12=0+1+1+2+3+4+5=12

// task 5
// function isMultiple(x, y) {
//   if (x < y) return false;
//   if (x == y) return true;
//   return isMultiple(x - y, y);
// }
// console.log(isMultiple(10, 5));
// console.log(isMultiple(15, 4));

// task 6
// function getSubarrays(arr) {
//   if (arr.length === 0) return [[]];
//   let smaller = getSubarrays(arr.slice(0, arr.length - 1));
//   return [arr].concat(smaller);
// }
// console.log(getSubarrays([1, 2, 3, 4]));
