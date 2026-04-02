// OOP = Object-Oriented Programming
// Тарҷумааш ба тоҷикӣ: Барномасозии ба объект нигаронидашуда
// Маънояш: Усул ё тарзи барномасозие, ки дар он ҳамаро объекти дорои
//  хусусиятҳо (пропертиҳо) ва амалҳо (методҳо) ҳисоб мекунанд.
// ConsTructur Function
function Person(name, age, status) {
  this.name = name;
  this.age = age;
  this.status = status;
  this.showPersons = () => {
    console.log(
      `Name: ${this.name} Age: ${this.age} Status: ${
        status ? "Active" : "InActive"
      }`
    );
  };
}
const user = new Person("Yusuf", 16, true);
user.showPersons();
