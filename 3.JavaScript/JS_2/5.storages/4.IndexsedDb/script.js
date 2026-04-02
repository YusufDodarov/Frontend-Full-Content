// Start IndexsedDB
// let db;
// window.onload = () => {
//   let request = indexedDB.open("Name", 1);
//   request.onerror = () => {
//     console.log("error", Error);
//   };
//   request.onsuccess = () => {
//     db = request.result;
//     console.log("Successfully", db);
//   };
// };

// task 1
// let db;
// window.onload = () => {
//   let request = indexedDB.open("Name", 1);
//   request.onerror = (e) => {
//     console.log("Error:", e.target.error);
//   };
//   request.onsuccess = (e) => {
//     db = e.target.result;
//     console.log("Successfully opened DB:", db);
//   };
//   request.onupgradeneeded = (e) => {
//     db = e.target.result;
//     let object = db.createObjectStore("contact", {
//       keyPath: "id",
//       autoIncrement: true,
//     });
//     object.createIndex("firstName", "firstName", { unique: false });
//     object.createIndex("lastName", "lastName", { unique: false });
//   };
// };
// const addData = (e) => {
//   e.preventDefault();
//   let newItem = {
//     firstName: document.querySelector(".firstName").value,
//     lastName: document.querySelector(".lastName").value,
//   };
//   let transaction = db.transaction(["contact"], "readwrite");
//   let store = transaction.objectStore("contact");
//   let request = store.add(newItem);
//   request.onsuccess = () => {
//     document.querySelector(".firstName").value = "";
//     document.querySelector(".lastName").value = "";
//   };
//   transaction.oncomplete = () => {
//     console.log("success");
//   };
//   transaction.onerror = () => {
//     console.log("Error");
//   };
// };
// document.querySelector("form").onsubmit = (e) => {
//   addData(e);
// };
