// Task

// task 1
// let a = 9;
// let z = "";
// for (let i = 0; i < a; i++) {
//   z += "* ";
//   console.log(z);
// }

// task 2
// let a = 9;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${a} * ${i} = ${a * i}`);
// }

// task 3
// let all = 10;
// for (let i = 1; i <= all; i++) {
//   let a = "";
//   for (let j = 1; j <= i; j++) {
//     a += j + " ";
//   }
//   console.log(a);
// };

// task 8
// let palidrom = "Арра".trim();
// let result_palidrom = "";
// for (let i = palidrom.length - 1; i >= 0; i--) {
//   result_palidrom += palidrom[i];
// }
// if (result_palidrom.toLowerCase() == palidrom.toLowerCase()) {
//   console.log("Палидром аст");
// } else {
//   console.log("Палидром нест!");
// };

// task 9
// let a = "БананаНа";
// let b = "на";
// let cnt = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i].toLowerCase() + a[i + 1] == b) {
//     cnt += 1;
//   };
// };
// console.log(cnt);

// task 11
// let a = "Softclub";
// let answerText = Math.floor(a.length / 2);
// let result = "";
// for (let i = 0; i < a.length; i++) {
//   if (i < answerText) {
//     result += a[i].toUpperCase();
//   } else {
//     result += a[i].toLowerCase();
//   };
// };
// console.log(result);

// task 13
// let x = 122221;
// let strX = String(x);
// let result = "";
// for (let i = strX.length - 1; i >= 0; i--) {
//   result += strX[i];
// }
// if (result === strX) {
//   console.log("Palidrome");
// } else {
//   console.log("Not Palidrome");
// }
