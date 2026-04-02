// Close Function - замикалния функсияе ки дар return-и худ боз як функсияи дигарро бармегардонад,
// параметрҳои функсияҳои дохила ба variable-ҳои функсияи беруна дастрасӣ доранд ва бар ҳарбор даъват кардани функсия,
// метавонад ҳар амал иҷро шавад!
// fisrt exsampe:
function outher(firstName) {
  return function inner(lastName) {
    console.log(firstName);
    console.log(lastName);
  };
}
const newName = outher("Yusuf");
newName("Dodarov");

// second exsample:
function create() {
  let cnt = 0;
  return function increment() {
      cnt++;
      return cnt;
  };
}
const counter = create();
console.log(counter());
console.log(counter());
console.log(counter());