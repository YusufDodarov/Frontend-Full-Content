// ✅ If чист?
// if — ин шарт аст. Вақте ки мо мехоҳем коре танҳо ҳангоми дуруст будани шарт иҷро шавад,
//  мо if истифода мебарем.

// Операторҳои муқоисавӣ ва мантиқӣ бо истифода аз if дар JavaScript:
// ==   — муқоиса бе назардошти намуди маълумот
// ===  — муқоиса бо санҷиши дақиқ (value ва type)
// !=   — баробар набудан
// !==  — дақиқ баробар набудан
// <    — камтар
// >    — бештар
// <=   — кам ё баробар
// >=   — зиёд ё баробар
// &&   — "ва" (AND) — ду тараф true бошад, натиҷа true
// ||   — "ё" (OR) — ягонтааш true бошад, натиҷа true
// !    — инкор (NOT)
// ? :  — оператори шартӣ (if кӯтоҳ)

// ==
// let a = 1, b = 1;
// if (a == b) {
//     console.log("Equal");
// } else {
//     console.log("Unequal");
// }

// !=
// let a = 1, b = 2;
// if (a != b) {
//     console.log("Equal");
// } else {
//     console.log("Unequal");
// }

// ===
// let a = "1", b = 1;
// if (a === b) {
//     console.log("Equal");
// } else {
//     console.log("Unequal");
// }

// !==
// let c = "6", d = 6;
// if (c !== d) {
//   console.log("Дақиқ баробар нестанд"); // true
// } else {
//   console.log("Баробар!"); // false
// }

// &&
// let e = 10;
// if (e > 5 && e < 15) {
//   console.log("Рақами додашуда байни 5 ва 15 ҳаст"); // true
// } else {
//   console.log("Рақами додашуда байни 5 ва 15 нест");
// }

// ||
// let f = "Html";
// if (f == "Js" || f == "Css" || f == "Html") {
//   console.log("This is a language for frontend developers!");
// } else {
//   console.log("This language is not for frontend developers!");
// }

// !
// let isActive = true;
// if (!isActive) {
//   console.log("User is not active");
// } else {
//   console.log("User is active");
// }

// Мисол бо (? :) — шарт кӯтоҳ
// let age = 18;
// let result = (age >= 18) ? "Балоғат расидааст" : "Балоғат нарасидааст";
// console.log(result);
