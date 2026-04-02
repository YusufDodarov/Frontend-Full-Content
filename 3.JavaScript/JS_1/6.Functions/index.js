// 🔹 1️⃣ Function чист?
// Function – як блоки коди барномавӣ аст, ки метавонад корҳоро
//  иҷро кунад ва натиҷаро баргардонад.
// Функсияро эълом мекунем, пас ҳафт кардан (call/execute) мекунем.
// Function метавонад аргументҳо (input) гирад ва натиҷа (return value) диҳад.

// 1.function declaration
// function Hello(value) {
//   return value;
// }
// console.log(Hello("Hello"));

// 2.function Expression
// const hello = function (str) {
//  console.log("Hello",str);
// };

// 3.Arrow Function
// 1.long
// const hello = (str) => {
//   console.log("Hello",str);
// };
// 2.short
// const hello = (str) => console.log("Hello", str);

// 4.Immediately Invoked Function Expression
// (function () {
//   console.log("Hello");
// })();

// 5.Generator function
// function* MyGenerator() {
//   yield "First";
//   yield "Second";
//   yield "Third";
// }
// const generator = MyGenerator();
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// returns
// function product(a1, a2) {
//   return function (b1, b2) {
//     return function (c1, c2) {
//       return function (d1, d2) {
//         return a1 * b1 * c1 * d2 + a2 * b2 * c2 * d2;
//       };
//     };
//   };
// }
// console.log(product(1, 2)(2, 3)(4, 5)(6, 7));

// product(1, 2)      // a1 = 1, a2 = 2
// (2, 3)             // b1 = 2, b2 = 3
// (4, 5)             // c1 = 4, c2 = 5
// (6, 7)             // d1 = 6, d2 = 7

// a1 * b1 * c1 * d2 = 1 * 2 * 4 * 7 = 56
// a2 * b2 * c2 * d2 = 2 * 3 * 5 * 7 = 210
// 56 + 210 = 266
