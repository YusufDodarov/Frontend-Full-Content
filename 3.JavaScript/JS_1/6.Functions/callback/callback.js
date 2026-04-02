// callback
// 🔹 1️⃣ Callback Function чист?
// Callback — ин function, ки ба дигар function ҳамчун аргумент фиристода
//  мешавад ва дертар даъват (invoke) мешавад.
// exsample:
// task 1
// function Hello(callback) {
//   return callback(); // function
// }
// Hello(() => console.log("Hello"));

// task 2
// function Hello(str, callback) {
//   return callback(str);
// }
// Hello("Yusuf", (str) => {
//   console.log("Hello " + str);
// });

