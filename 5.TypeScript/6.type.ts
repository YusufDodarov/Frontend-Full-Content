// type

// 1.type array
// type MyType = number | string | null | boolean;
// let product: MyType[] = ["pen", 10, true, "book", 22, false, "table", 13, true];

// 2.type object
// type Person = {
//   id: number;
//   name: string;
//   password: number | string;
//   email?: string; // optional
// };
// let person: Person = {
//   id: 1,
//   name: "Yusuf",
//   password: "172yusuf17#",
// };
// console.log(person);

// 3.type Functions
// task 1
// type Number = { x: number; y: number };
// function Sum(numbers: Number): number {
//   return numbers.x + numbers.y;
// }
// console.log(Sum({ x: 6, y: 6 }));

// task 2
// type Login = {
//   firstName: string;
//   email: string;
//   password: number | string;
//   id?: number;
// };
// function Login(data: Login): Login {
//   return { ...data };
// }
// let user1 = Login({
//   firstName: "Yusuf Dodarov",
//   email: "yusuf33@exsample.com",
//   password: "yu12**22",
// });
// console.log(user1);

// 4.type Constractur Function
// type PersonType = {
//   id: number | null | any;
//   name: string;
//   age: number;
//   behavior: boolean;
//   showPerson: () => void;
// };
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
// user1.showPerson()

// 5.type Class Constractur
// type StudentType = {
//   id: number | undefined;
//   name: string;
//   age: number;
//   behavior: boolean;
//   showPerson: () => void;
// };
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

// Heritage objects
// type PersonType = {
//   id: number | null;
//   name: string;
//   age: number;
// };

// type PersonsListLanguage = {
//   language: string[];
// };

// type Person = PersonType & PersonsListLanguage;

// let user1: Person = {
//   id: 1,
//   name: "Yusuf",
//   age: 16,
//   language: ["Js", "Ts"],
// };
// console.log(user1);
