console.log(document.querySelector("h1"));
console.log(document.getElementById("h1-id"));
console.log(document.querySelector("h1").innerHTML);
console.log(document.querySelector("h1").innerText);
console.log(document.querySelector("h1").textContent);

console.log((document.querySelector("h1").textContent = "<h2>Hello</h2>"));
console.log(document.querySelector("h1").classList.add("active"));
console.log(document.querySelector("h1").classList.remove("active"));

const h2 = (document.querySelector("h1").innerHTML = "<h2>Hello</h2>");
console.log(h2);

document.body.append((document.createElement("h3").innerHTML = "Salom"));
