// 🟦 Object дар JavaScript чист?
// ✅ Object — ин як контейнер (сандуқ) аст, ки маълумотҳоро дар
// шакли "калид:арзиш" нигоҳ медорад.
let user = {
  name: "Yusuf",
  age: 16,
  behavior: false,
  phone: 984938343,
  products: ["book", "pen", "notebook"],
};
user.email = "yusuf@gmail.com"; // add property
user.phone = 988393922; // edit property
delete user.behavior; // delete propery
user.products.push("pencil"); // add element in array
console.log(user); // object
console.log(user.age); // 16

// this
// 🔹 this чист?
// Дар JavaScript, this як калимаи махсус аст, ки ҳамеша ба объекте
//  ишора мекунад, ки айни замон функсияро иҷро мекунад.
// Яъне — "соҳиби" функсия.
var object = {
  name: "Yusuf",
  a: 8,
  b: 8,
  sum: function () {
    console.log(this.a + this.b);
  },
};
object.sum();