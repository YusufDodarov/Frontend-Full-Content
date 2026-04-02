let a = "Hello World";
setTimeout(() => {
  document.querySelector(".h1").innerText = a;
}, 2000);
console.log(window.location.host);
console.log(window.location.href);
console.log(window.location.pathname);
console.log(window.location.port);
console.log(window.location.hostname);
console.log(locations);
location.replace("https://www.google.com");
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  location.reload();
});
