// Tasks

// task 1
// function incrementItems(arr){
//     return arr.map(e=>e+1)
// }
// console.log(incrementItems([0,1,2,3]))

// task 2
// function check(arr,x){
//     return arr.includes(x)
// }
// console.log(check([1,2,3],3))

// task 3
// function findIndex(arr,str){
//     return arr.indexOf(str)
// }
// console.log(findIndex(["hi", "edabit", "fgh", "abc"],"fgh"))

// task 4
// function toNumberArray(arr){
//     return arr.map(e=>Number(e))
// }
// console.log(toNumberArray(["9.4", "4.2"]))

// task 5
// function parseArray(arr){
//     return arr.map(e=>String(e))
// }
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]))

// task 6
// function sumArray(arr){
// return arr.reduce((acc,cur)=>acc+cur,0)
// }
// console.log(sumArray([1,2,3,4,5]))

// task 7
// let arr = [];
// for (let i = 1; i <= 100; i++) {
//   arr.push(i);
// }
// console.log(arr);

// task 8
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = arr.length - 1; i >= 0; i--) {
//   arr.pop(i);
//   console.log(arr);
// }

// task 9
// let arr = [1, "Mahmud", 2, 90, "Umar", "Ali", 8, 20, "Muhamad"];
// let numbers = arr.filter(function (arr) {
//   return typeof arr == "number";
// });
// let strings = arr.filter(function (arr) {
//   return typeof arr == "string";
// });
// let result = numbers.concat(strings);
// console.log(result);

// task 10
// let arr = [1, 2, 3.4, 44.4, 94, 2.3];
// const result = arr.filter((number) => {
//   return Number.isInteger(number);
// });
// console.log(result);

// task 11
// function compoundArray(arr1, arr2) {
//   const newArray = [];
//   if (arr1.length > arr2.length) {
//     arr1.forEach((e, i) => {
//       newArray.push(arr1[i], arr2[i]);
//     });
//   } else {
//     arr2.forEach((e, i) => {
//       newArray.push(arr1[i], arr2[i]);
//     });
//   }
//   return newArray;
// }
// console.log(compoundArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));

// task 12
// function arrBetween(x,y,arr){
//     return arr.filter(e=>e > x&& e<y)
// }
// console.log(arrBetween(3,8,[1,5,95,0,4,7]))

// task 13
// function arrayValuesTypes(arr) {
//     return arr.map(e=>typeof e)
// }
// console.log(arrayValuesTypes([1, 2, "null", []]));

// task 14
// function wordLengths(arr) {
//   return arr.map(e=>e.length)
// }
// console.log(wordLengths(["hello", "world"]));

// task 15
// function checkSquareAndCube(arr) {
//     return Math.sqrt(arr[0])==Math.cbrt(arr[1])
// }
// console.log(checkSquareAndCube([4,8]))

// task 16
// function invertArray(arr) {
//   return arr.map((e) => -e);
// }
// console.log(invertArray([1, -2, 3, -4, 5]));

// task 17
// function getMultipliedArr(arr) {
//     return arr.map(e=>e*2)
// }
// console.log(getMultipliedArr([2, 5, 3]));

// task 18
// function forbiddenLetter(q, arr) {
//     return !arr.some(e=>e.includes(q))
// }
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));

// task 19
// function sumQ(arr, x) {
//   return arr.filter((e) => e > x).reduce((acc, cur) => acc + cur, 0);
// }
// console.log(sumQ([1, 5, 20, 30, 4, 9, 18], 5));

// task 20
// function filterArray(arr) {
//   return arr.filter((e) => typeof e === "number");
// }
// console.log(filterArray([1, 2, 3, "a", "b", 4]));

// task 21
// function evenOrOdd(arr) {
//   if (arr.length === 0) arr = [0];
//   return arr.reduce((acc, cur) => acc + cur, 0) % 2 === 0 ? "even" : "odd";
// }
// console.log(evenOrOdd([0, 1, 5]));

// task 22
// function rangeOfNum(x, y) {
//   let newArr = [];
//   for (let i = x; i <= y; i++) {
//     newArr.push(i);
//   }
//   return newArr;
// }
// console.log(rangeOfNum(2, 11));

// task 23
// function FindMaxNumberAndMinNumberInArray(arr) {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   return { max: max, min: min };
// }
// console.log(FindMaxNumberAndMinNumberInArray([2, 5, 14, 7, 22, 10, -2]));

// task 24
// function get(arr) {
//   let result = arr.map((i) => {
//     return i.charAt(0).toUpperCase() + i.slice(1).toLowerCase();
//   });
//   return result;
// }
// console.log(get(["yusUf", "soRBoN"]));

// task 25
// function Array(arr) {
//   let result = arr.filter((e) => {
//     return typeof e === "number" && !Number.isInteger(e);
//   });
//   return result;
// }
// console.log(Array([2, 10.2, 8, "str", 6.7, 5]));