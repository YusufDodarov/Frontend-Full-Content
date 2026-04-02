// 📌 Map чист?
// Map — як навъи объект аст, ки калид ва арзишро бо ҳам нигоҳ медорад.
// Вале фарқаш аз object дар он аст, ки:
// ✅ Калидҳо на танҳо string, балки ҳама гуна тип (number, object, function...) шуда метавонанд.
// ✅ Тартиби воридшавӣ нигоҳ дошта мешавад (order preserved).
let map = new Map();
map.set("Name", "Ali");
map.set("Age", 16);
map.set("behavior", false);
console.log(map);
console.log(map.get("Name"));

// with object
let person = {};
let map2 = new Map();
let id = { id: 1 };
person[id] = 2;
map2.set(person, id);
console.log(map2);
console.log(map2.get(id));
