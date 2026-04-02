// Рекурсия ин функсияе ки дар дохили худ худашро даъват мекунад!
// Сохтори асосии рекурсия
// Ҳар рекурсия 2 қисми ҳатмӣ дорад:
// Base case (ҳолати қатъ) – шарте, ки рекурсияро бозмедорад
// Recursive call – даъвати худи ҳамон функсия
// Агар base case набошад → infinite loop / stack overflow мешавад ❌
// Мисоли оддӣ
// Факториал:
// 5! = 5 × 4 × 3 × 2 × 1
function factorial(n) {
  if (n === 1) {        // base case
    return 1;
  }
  return n * factorial(n - 1); // recursive call
}
console.log(factorial(5)); // 120
// инҷо:
// factorial(5)
// → 5 * factorial(4)
// → 5 * 4 * factorial(3)
// → ...
// → 5 * 4 * 3 * 2 * 1