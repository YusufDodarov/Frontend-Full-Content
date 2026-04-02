// ✅ Array чист?
// Array — ин як рӯйхат (маҷмӯа) аст, ки метавонад якчанд арзишро дар якҷо нигоҳ дорад.
// Мисли як қуттӣ аст, ки дар он чанд чиз ҳаст.
// let arr = [things];
// for exsample
// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0]); //1
// console.log(arr[arr.length-1])// 5

// Array Metods

// no callback
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.pop());
// console.log(arr.push(6));
// console.log(arr.unshift(0));
// console.log(arr.shift());
// console.log(arr.reverse());
// console.log(arr.indexOf(4));
// console.log(arr.slice(1, 4));
// console.log(arr.toString());
// console.log(arr.join(" "));
// splice methods
// let arr = [1, 2, 3, 4, 5];
// let result = arr.splice(1, 1, 23);
// let result2 = arr.splice(0, 0, "Hello");
// let result3 = arr.splice(4, 1);
// console.log(arr);
// concat methods
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let result = arr.concat(arr2);
// console.log(result);

// with callback
// 1.Sort
// let arr = [11, 2, 33, 6, 3, 62, 16];
// let result = arr.sort(function (x, y) {
//   return x - y;
// });
// console.log(result);

// 2.every
// Дар ин метод вақте ки мо як ададеро медиҳем ва агар ҳамаи ададҳои массив аз
// адади дода калон бошанд онгоҳ true медиҳад! ва гарна false!
// let arr = [11, 2, 33, 6, 3, 62, 16];
// let result = arr.every(function (x) {
//   return x > 33;
// });
// console.log(result);

// 3.some Ин метод месанҷад, ки оё ягон адади массив шартро иҷро мекунад.
// Агар ҳатто як адад шартро иҷро кунад, true медиҳад! Агар ягонто набошад — false!
// let arr = [11, 2, 33, 6, 3, 62, 16];
// let result = arr.some(function (x) {
//   return x >= 63;
// });
// console.log(result);

// 4.filter
// let arr = [11, 2, 33, 6, 3, 62, 16];
// let result = arr.filter(function (x) {
//   return x >= 11;
// });
// console.log(result);

// 5.find Ин метод аввалин элементеро меёбад, ки шартро иҷро мекунад!
// Агар ёфт, бармегардонад — ва агар ягонто набошад, result = undefined мешавад.
// let arr = [1, 2, 33, 6, 3, 62, 16];
// let result = arr.find(function (x) {
//   return x % 2 == 0;
// });
// console.log(result); // ба мақсадш расид!

// 6.findIndex Ин метод индекс (яъне рақами ҷойгиршавӣ)-и аввалин элементро бармегардонад,
// ки шартро иҷро мекунад. Агар ягон элемент мувофиқ набошад — бармегардонад -1.
// let arr = [1, 2, 33, 6, 3, 62, 16];
// let result = arr.findIndex(function (x) {
//   return x > 2;
// });
// console.log(result);

// 7.forEach
// let arr = ["Yusuf", "Umar", "Ali", "Bilol", "Ahmad"];
// arr.forEach(function (value, index) {
//   console.log(`${index}: ${value}`);
// });

// 8.map
// let arr = ["Yusuf", "Umar", "Ali", "Bilol", "Ahmad"];
// let result = arr.map(function (value) {
//   return `<${value}>`;
// });
// console.log(result);

// 9.reduce
// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce(function (sum, i) {
//   return (sum += i);
// });
// console.log(`Sum [${arr}] --> ${result}`);