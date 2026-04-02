const btn = document.querySelector(".button");
btn.onclick = function () {
  btn.classList.toggle("active");
};
document.querySelector("input").onchange = function () {
  document.querySelector("input").classList.toggle("focus");
};

prompt;
let promptValue = window.prompt("Enter your name");
if (promptValue && promptValue.trim() !== "") {
  document.body.style.backgroundColor = "blue";
  document.write(`<h1>Welcome to ${promptValue}</h1>`);
} else if (promptValue === null || promptValue.trim() === "") {
  document.body.style.backgroundColor = "red";
}
