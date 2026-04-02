// tasks

// task 1
// function checkNumber(x) {
//   if (x == 0) {
//     return "Zero";
//   } else if (x <= 0) {
//     return "Negative";
//   } else {
//     return "Positive";
//   }
// }
// console.log(checkNumber(3));
// console.log(checkNumber(-5));
// console.log(checkNumber(0));

// task 2
// function endNine(x) {
//   let mod = x % 10;
//   return mod == 9;
// }
// console.log(endNine(149));

// task 3
// function century(year) {
//   return year / 100;
// }
// console.log(century(2000));

// task 4
// function doubleFactorial(n) {
//   let x = 1;
//   for (let i = n; i >= 0; i -= 2) {
//     x *= i;
//   }
//   return x;
// }
// console.log(doubleFactorial(9));

// task 5
// function sumDigit(x) {
//   let sum = 0;
//   while (x > 0) {
//     sum += x % 10;
//     x = Math.floor(x / 10);
//   }
//   return sum;
// }
// console.log(sumDigit(333));

// task 6
// function countVowels(str) {
//   let vovels = "a,e,u,i,o,y";
//   let cnt = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vovels.includes(str[i].toLowerCase())) {
//       cnt += 1;
//     }
//   }
//   return `Ҳарфҳои садоноки ин ҷумла ${cnt}`;
// };
// console.log(countVowels("Yusuf"));

// task 7
// function name(str) {
//   let newStr = str.split(" ");
//   let result = newStr.map((e) => {
//     return e.at(0).toUpperCase() + e.slice(1) + " ";
//   });
//   return result.join("");
// }
// console.log(name("yusuf dodarov"));

// task 8
// function checkNumber(x) {
//   if (x <= 0) {
//     return "Neither simple number and nor complicated number!";
//   }
//   for (let i = 2; i <= Math.sqrt(x); i++) {
//     if (x % i === 0) {
//       return "complicated number";
//     }
//   }
//   return "simple number";
// }
// console.log(checkNumber(7));


// task 9
// function RemoveVovelsLetterInStirngs(str) {
//   let vovels = "aeyuio";
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!vovels.includes(str[i].toLowerCase())) {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(RemoveVovelsLetterInStirngs("Hello"));

// task 10
// function fiftyThiryTwenty(number) {
//   let myobject = {
//     upvotes: number * 0.5,
//     downvotes: number * 0.3,
//     comments: number * 0.2,
//   };
//   return myobject;
// }
// console.log(fiftyThiryTwenty(10000));

// task 11
// const stringObjLn = (str) => {
//   let numbers = 0;
//   let letters = 0;
//   let newText = str.split("");
//   const result = newText.map((e) => {
//     if (!isNaN(e) && e !== " ") {
//       numbers++;
//     } else {
//       letters++;
//     }
//   });
//   return { letter: letters, numbers: numbers };
// };
// console.log(stringObjLn("HelloWorld11"));

// task 12
// function set(obj) {
//   let result = {};
//   for (let key in obj) {
//     result[obj[key]] = key;
//   }
//   return result;
// }
// console.log(set({ a: 1, b: 2 }));

// task 13
// function main(a, b) {
//   let cnt = 0;
//   for (let i = 0; i <= b; i++) {
//     let result = i.toString();
//     if (result.includes(a)) {
//       cnt++;
//     }
//   }
//   return cnt;
// }
// console.log(main(5, 55));

// task 14
// function toSeparateBySyllables(str) {
//   let vovels = "аоуӯиэaeiouыь";
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += str[i];
//     if (vovels.includes(str[i].toLowerCase())) {
//       if (i !== str.length - 1 && !vovels.includes(str[i + 1].toLowerCase())) {
//         result += "-";
//       }
//     }
//   }
//   return result;
// }
// console.log(toSeparateBySyllables("Омӯзгор"));

// task 15
// function Equation(x, y, answer) {
//   if (typeof y === "number" && typeof answer === "number") {
//     let result = answer - y;
//     console.log(`${x} + ${y} = ${answer}
// x = ${answer} - ${y}
// x = ${result}
// Санҷиш
// -------
// x = ${result} + ${y} = ${result + y}`);
//   } else {
//     console.log("Вурудҳо бояд рақам бошанд!");
//   }
// }
// Equation("x", 8, 9);

// task 16
// function Desckrimnant(a, b, c) {
//   let bSquare = b * b;
//   let D = bSquare - 4 * a * c;
//   if (
//     D >= 0 &&
//     typeof a === "number" &&
//     typeof b === "number" &&
//     typeof c === "number"
//   ) {
//     let rootD = Math.sqrt(D);
//     let x1 = (-b + rootD) / (2 * a);
//     let x2 = (-b - rootD) / (2 * a);
//     console.log(`x1 = ${x1}`);
//     console.log(`x2 = ${x2}`);
//   } else {
//     console.log("Натиҷа вуҷуд надорад ё вурудҳо нодурустанд.");
//   }
// }
// Desckrimnant(1, -9, 1);

// task 17
// const findLetterInText=(str,q)=>{
//     let newText=str.split("")
//     let indexs=[]
//     let cnt=0
//     newText.forEach((el,i)=>{
//         if(el.toLowerCase().includes(q)){
//             cnt++
//             indexs.push(i)
//         }
//     })
//     const result={text:str,letter:cnt,index:indexs}
//     return result
// }
// console.log(findLetterInText("JavaScriptA",'a'));

// task 18
// function sumBinaryDigits(binaryNumber) {
//     let sum = 0;
//     let str = binaryNumber.toString();
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '1') {
//             sum += Math.pow(2, str.length - i - 1);
//         }
//     }
//     return sum;
// }
// console.log(sumBinaryDigits(1101)); // 13
// console.log(sumBinaryDigits(101));  // 5
// console.log(sumBinaryDigits(1111)); // 15

// task 19
// function isArmstrong(n) {
//   let str = n.toString();
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     sum += Math.pow(parseInt(str[i]), str.length);
//   }
//   return sum == n;
// }
// console.log(isArmstrong(153));
// console.log(isArmstrong(123));
// console.log(isArmstrong(370));
