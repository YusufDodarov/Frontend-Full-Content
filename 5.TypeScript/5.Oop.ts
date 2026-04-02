// Constractur function
// let cnt: number = 0;
// function Person(this: any, name: string, age: number, id: number) {
//   this.name = name;
//   this.age = age;
//   this.id = id;
//   this.showPerson = () => {
//     console.log("User" + ": " + cnt++);
//     console.log(`Name: ${this.name}\nAge: ${this.age}`);
//   };
// }
// let user1 = new (Person as any)("Yusuf", 17, null);
// let user2 = new (Person as any)("Ahmad", 19, 2);
// let user3 = new (Person as any)("Muhamad", 23, 3);
// user1.showPerson();
// user2.showPerson();
// user3.showPerson();
// Чӣ кор мекунад (Person as any)?
// Ин як type assertion (каст) аст. Мо ба TypeScript мегӯем:
// “Эй, Person-ро мисли any ҳисоб кун, ба типҳояш аҳамият надиҳ.”
// 👉 Акнун TypeScript фикр мекунад Person як constructor-и any аст, ва дигар эрор намедиҳад.
// Ба ибораи дигар:
// бе (as any) → TypeScript “ман Person-ро constructor намебинам” мегуяд.
// бо (as any) → TypeScript: “ок, ман Person-ро месозам, дигар напурсам”.

// types Class
// let cnt: number = 0;
// class Person {
//   constructor(
//     public name: string,
//     public age: number,
//     public id: number | null
//   ) {}
//   showPerson() {
//     console.log("User" + ": " + cnt++);
//     console.log(`Name: ${this.name}\nAge: ${this.age}`);
//   }
// }
// let user1 = new Person("Yusuf", 17, null);
// let user2 = new Person("Ahmad", 12, 2);
// let user3 = new Person("Muhamad", 19, 3);
// user1.showPerson();
// user2.showPerson();
// user3.showPerson();
