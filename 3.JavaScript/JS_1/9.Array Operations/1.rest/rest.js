// rest
// task 1
function Arr(...arr) {
  return arr;
}
console.log(Arr(1, 2, 3, 4, 5));

// task 2
function get(...arr) {
    return Math.max(...arr);
}
console.log(get(1, 2, 3, 4, 5));

// task 3
function sum(x, y, z) {
  return x * y * z;
}
let arr = [3, 3, 3];
console.log(sum(arr[0], arr[1], arr[2]));
console.log(sum(...arr));