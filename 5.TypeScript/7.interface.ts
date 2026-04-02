// interface

// 1.interface array
// interface MyType extends Array<string | number> {}
// let product: MyType = ["book", 93, "pen", 13];

// 2.interface object
// interface MyType {
//   id: number | null;
//   name: string;
//   age: number;
//   productList: any;
// }
// let user1: MyType = {
//   id: null,
//   name: "Yusuf",
//   age: 17,
//   productList: ["Instagram", "Online Shop"],
// };

// 3.interface functions
// task 1
// interface Number {
//   x: number;
//   y: number;
// }
// function Sum(numbers: Number): number {
//   return numbers.x + numbers.y;
// }
// console.log(Sum({ x: 6, y: 6 }));
// task 2
// interface Login {
//   firstName: string;
//   email: string;
//   password: number | string;
//   id?: number;
// }
// function Login(data: Login): Login {
//   return { ...data };
// }
// let user1 = Login({
//   firstName: "Yusuf Dodarov",
//   email: "yusuf33@exsample.com",
//   password: "yu12**22",
// });
// console.log(user1);

// 4.interface Constractur Function
// interface PersonType {
//   id: number | null | any;
//   name: string;
//   age: number;
//   behavior: boolean;
//   showPerson: () => void;
// }
// function Person(
//   this: PersonType,
//   name: string,
//   age: number,
//   behavior: boolean
// ) {
//   this.name = name;
//   this.age = age;
//   this.behavior = behavior;
//   this.showPerson = () => {
//     console.log(`Name: ${this.name}\nAge: ${this.age}`);
//   };
// }
// let user1 = new (Person as any)("Yusuf", 16, true);
// let user2 = new (Person as any)("ALi", 19, false);
// let user3 = new (Person as any)("Muhamad", 26, true);
// user1.showPerson();

// 5.interface Class Constractur
// interface StudentType {
//   id: number | undefined;
//   name: string;
//   age: number;
//   behavior: boolean;
//   showPerson: () => void;
// }
// class Student implements StudentType {
//   static cnt: number = 1;
//   id: number;
//   constructor(
//     public name: string,
//     public age: number,
//     public behavior: boolean
//   ) {
//     this.id = Student.cnt++;
//   }
//   showPerson() {
//     console.log(`User: ${this.id}`);
//     console.log(
//       `Name: ${this.name}\nAge: ${this.age}\nBehavior: ${this.behavior}`
//     );
//   }
// }
// const student1 = new Student("Yusuf", 16, true);
// const student2 = new Student("Ali", 19, false);
// const student3 = new Student("Muhamad", 26, true);
// student1.showPerson();
// student2.showPerson();
// student3.showPerson();

// Heritage Types
// interface PersonType {
//   id: number | null;
//   name: string;
//   age: number;
// }

// interface PersonsListLanguage {
//   language: string[];
// }

// interface Person extends PersonType, PersonsListLanguage {}

// let person1: Person = {
//   id: 1,
//   name: "Yusuf",
//   age: 16,
//   language: ["Js", "Ts"],
// };
// console.log(person1);

