// Tasks

// task 1
// let obj = {
//   colors: {
//     color1: "red",
//     color2: "green",
//   },
// };
// console.log(obj.colors.color1);

// task 2
// let obj = [
//   {
//     id: 1,
//     name: "Ali",
//     age: 25,
//     city: "Tashkent",
//   },
//   {
//     id: 2,
//     name: "Ahmad",
//     age: 25,
//     city: "Tashkent",
//   },
//   {
//     id: 3,
//     name: "Ali",
//     age: 25,
//     city: "Tashkent",
//   },
// ];
// obj.forEach((e) => {
//   if (e.id !== 2) {
//     console.log(e);
//   }
// });

// task 3
// let arr = [
//   {
//     groupName: "react",
//     week: 5,
//     progressBookForWeek: [
//       {
//         fullName: "muhammad Negmatov ",
//         progresses: [
//           {
//             id: 107116,
//             ball: 5,
//           },
//           {
//             id: 107300,
//             ball: 3,
//           },
//           {
//             id: 107487,
//             ball: 2,
//           },
//         ],
//       },
//       {
//         fullName: "ali",
//         progresses: [
//           {
//             id: 107116,
//             ball: 5,
//           },
//           {
//             id: 107300,
//             ball: 3,
//           },
//           {
//             id: 107487,
//             ball: 2,
//           },
//         ],
//       },
//     ],
//   },
// ];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].progressBookForWeek.length; j++) {
//     let progresses = arr[i].progressBookForWeek[j].progresses;
//     let totalball = 0;
//     for (let l = 0; l < progresses.length; l++) {
//       totalball += progresses[l].ball;
//     }
//     let average = totalball / progresses.length;
//     console.log(`${arr[i].progressBookForWeek[j].fullName.trim()}: ${average}`);
//   }
// }

// task 4
// let arr = [
//   {
//     groupName: "react",
//     week: 5,
//     progressBookForWeek: [
//       {
//         fullName: "muhammad Negmatov ",
//         progresses: [
//           {
//             id: 107116,
//             ball: 5,
//           },
//           {
//             id: 107300,
//             ball: 3,
//           },
//           {
//             id: 107487,
//             ball: 2,
//           },
//         ],
//       },
//       {
//         fullName: "ali",
//         progresses: [
//           {
//             id: 107116,
//             ball: 5,
//           },
//           {
//             id: 107300,
//             ball: 3,
//           },
//           {
//             id: 107487,
//             ball: 2,
//           },
//         ],
//       },
//     ],
//   },
// ];
// let WeekAverage = arr.flatMap((elem) => {
//   return elem.progressBookForWeek.map((ele) => {
//     let sum = ele.progresses.reduce((sum, num) => sum + num.ball, 0);
//     let average = sum / ele.progresses.length;
//     return {
//       name: ele.fullName.trim(),
//       ball: average,
//     };
//   });
// });
// console.log(WeekAverage);

// task 5
// function getVoteCount(obj) {
//   return obj.upvotes - obj.downvotes;
// }
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));

// task 6
// let array = [
//   {
//     id: "1",
//     name: "Yusuf",
//     surname: "Dodarov",
//     age: 17,
//     city: "Dushanbe",
//     language: [
//       { python: false, bals: 22 },
//       { javascript: true, bals: 90 },
//       { "c++": true, bals: 78 },
//     ],
//   },
//   {
//     id: "2",
//     name: "Dilshod",
//     surname: "Rahimov",
//     age: 23,
//     city: "Kulob",
//     language: [
//       { python: true, bals: 90 },
//       { javascript: true, bals: 90 },
//       { "c++": true, bals: 78 },
//     ],
//   },
//   {
//     id: "3",
//     name: "Ali",
//     surname: "Rahmonov",
//     age: 27,
//     city: "Khujand",
//     language: [
//       { python: false, bals: 92 },
//       { javascript: false, bals: 20 },
//       { "c++": true, bals: 89 },
//     ],
//   },
// ];

// function sumNumberLeacture(array) {
//   const newArray = array.map((elem) => {
//     const total = elem.language.reduce((acc, cur) => (acc += cur.bals), 0);
//     return { ...elem, total };
//   });
//   return newArray.sort((el1, el2) => el2.total - el1.total);
// }
// console.log(sumNumberLeacture(array));
