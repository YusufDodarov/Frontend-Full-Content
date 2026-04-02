// task 1
// function maxNumberFinder() {
//   let max;
//   return (n) => {
//     if (max == undefined || n > max) {
//       max = n;
//     }
//     return max;
//   };
// }
// let findMax = maxNumberFinder();
// console.log(findMax(10));// 10
// console.log(findMax(5));

// task 2
// function sumNumbers() {
//   var sum = 0;
//   return function (x) {
//     sum += x;
//     return sum;
//   };
// }
// let addNumbers = sumNumbers();
// console.log(addNumbers(3));
// console.log(addNumbers(5));
// console.log(addNumbers(2));

// task 3
// function averageCalculator() {
//   let sum = 0;
//   let cnt = 0;
//   return function (x) {
//     cnt++;
//     return (sum += x) / cnt;
//   };
// }
// const calculateAverage = averageCalculator();
// console.log(calculateAverage(5));
// console.log(calculateAverage(10));

// task 4
// function sequenceGenerator(n) {
//   let cnt = 0;
//   return () => {
//     cnt += n;
//     return cnt;
//   };
// }
// const generateSequence = sequenceGenerator(2);
// console.log(generateSequence());
// console.log(generateSequence());
// console.log(generateSequence());

// task 5
// function isMultipleOf(n) {
//   return function (x) {
//     return x % n == 0;
//   };
// }
// const checkMultipleOfThree = isMultipleOf(3);
// console.log(checkMultipleOfThree(9));
// console.log(checkMultipleOfThree(10));
