// 🔹 1️⃣ Spread Operator чист?
// ... (се нуқта) дар JavaScript истифода мешавад барои:
// Копия кардан ё тақсим кардани массив ва объект
// Илова кардани элементҳо ба массив ё объект
// Функсияҳо бо аргументҳои номаълум
// Мисол:
// not spread operator
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [arr]; // false
// console.log(arr2);

// with spread operator
let arr = [1, 2, 3, 4, 5];
let arr2 = [...arr]; // false
let arr3 = [...arr, 6, 7, 8, 9];
arr3.push(10);
console.log(arr2);
console.log(arr3);

