// OOP = Object-Oriented Programming
// Тарҷумааш ба тоҷикӣ: Барномасозии ба объект нигаронидашуда
// Маънояш: Усул ё тарзи барномасозие, ки дар он ҳамаро объекти дорои хусусиятҳо (пропертиҳо) ва амалҳо (методҳо) ҳисоб мекунанд.
// 📌 Яъне, дар OOP:
// Класс дар JavaScript — ин як "қолиб" (шаблон) аст, ки бо он объектҳои якхела месозем.
// Яъне, агар як намуди объектро бисёр бор сохтанӣ бошӣ, ҳар дафъа кодро аз нол нанависӣ, як класс месозӣ, баъд аз он объектҳо метонӣ созӣ.якчандто
// Класс = нақша ё қолиб барои объектҳо
// Объект = чизе, ки аз класс сохта шудааст
// Проперти (хусусият) = маълумот ё хусусияти объект
// Метод = амал ё функсияе, ки объект метавонад иҷро кунад
// 💡 Мисол аз ҳаёт:
// Класс = нақшаи мошин
// Объект = мошинҳои воқеӣ, ки аз ҳамин нақша сохта шудаанд
// Проперти = ранги мошин, навъи мошин
// Метод = ҳаракат кардан, рондан
class Car {
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }
  show() {
    console.log(
      `Name Car: ${this.name} Color: ${this.color} Type Car: ${this.type}`
    );
  }
}
let myCar = new Car("BMW", "blue", "X5");
myCar.show();


// Меросгири байни классҳо бо ёррии методи super()
class Father {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  show() {
    console.log(`${this.name}:${this.age}`);
  }
}
class boy extends Father {
  constructor(name, age, money, behavior) {
    super(name, age);
    this.money = money;
    this.behavior = behavior;
  }
  showAll() {
    console.log(
      `Аз падар номи мерос гирифта:${this.name}
Аз падар соли(сину сол) мерос гирифта:${this.age}
Пулҳои худам:${this.money}
Ахлоқи аз худам мерос гирифта:${this.behavior}`
    );
  }
}
let I_am = new boy("Yusuf", 16, 22, true);
I_am.showAll();
