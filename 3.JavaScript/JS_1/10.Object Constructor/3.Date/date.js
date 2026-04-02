// Date дар JavaScript як объекти махсус аст, ки барои кор кардан бо таърих
// ва вақт истифода мешавад — масалан санаи имрӯза, соат, дақиқа, санаи таваллуд,
// ҳисоб кардани фарқи байни ду сана ва ғайра.

let date = new Date();
console.log(`Date: ${date.getDate()}`);
console.log(`Day: ${date.getDay()}`);
console.log(`Year: ${date.getFullYear()}`);
console.log(`Month: ${date.getMonth() + 1}`);
console.log(
  `Hour: ${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${date.getSeconds()}:${date.getMilliseconds()} ${
    date.getHours() < 12 ? "AM" : "PM"
  }`
);
let hour = `Hour2: ${date.getHours() % 12 || 12}`;
let dates = `${date
  .getMinutes()
  .toString()
  .padStart(2, "0")}:${date.getSeconds()}:${date.getMilliseconds()}`;
let clock = `${date.getHours() < 12 ? "AM" : "PM"}`;
let result = `${hour}:${dates}:${clock}`;
console.log(result);

let date2 = new Date(1000000);
let date3 = new Date("2025.05.12");
let date4 = new Date(2025, 5, 12);
console.log(date2);
console.log(date3);
console.log(date4);
