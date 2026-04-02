let box = document.querySelector(".box");
let MainForm = document.querySelector(".MainForm");
let btnAdd = document.querySelector(".btnAdd");
let ModalEdit = document.querySelector(".ModalEdit");
let FormEdit = document.querySelector(".FormEdit");
const API = `https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department`;

MainForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let newUsers = {
    title: MainForm["title"].value.trim(),
  };
  if (newUsers.title === "") {
    return;
  }
  addUsers(newUsers);
});
FormEdit.addEventListener("submit", (event) => {
  event.preventDefault();
  let newUser = {
    title: FormEdit["title"].value.trim(),
  };
  if (newUser.title === "") {
    return;
  }
  editUsers(idx, newUser);
  ModalEdit.close();
});
async function editUsers(id, newUser) {
  try {
    let { data } = await axios.put(`${API}/${id}`, newUser);
    getData();
  } catch (error) {
    console.error(error);
  }
}
let idx = null;
// get
async function getData() {
  try {
    let { data } = await axios.get(API);
    get(data);
  } catch (error) {
    console.error(error);
  }
}

function get(data) {
  box.innerHTML = "";
  data.forEach((element) => {
    let container = document.createElement("div");
    let h1 = document.createElement("h1");
    if (element.completed == true) {
      h1.style.textDecoration = "line-through";
    }
    let btnDelete = document.createElement("button");
    let btnEdit = document.createElement("button");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = element.completed;
    checkbox.addEventListener("click", () => {
      element.completed = !element.completed;
      editUsers(element.id, element);
    });
    btnDelete.innerHTML = "Delete";
    btnEdit.innerHTML = "Edit";
    btnDelete.addEventListener("click", function () {
      deleteUsers(element.id);
    });
    btnEdit.addEventListener("click", function () {
      idx = element.id;
      ModalEdit.showModal();
      FormEdit["title"].value = element.title;
    });
    container.append(h1, checkbox, btnEdit, btnDelete);
    h1.innerHTML = element.title;
    box.appendChild(container);
  });
}

// post
async function addUsers(newUsers) {
  try {
    let { data } = await axios.post(API, newUsers);
    MainForm["title"].value = "";
    getData();
  } catch (error) {
    console.error(error);
  }
}

// delete
async function deleteUsers(id) {
  try {
    let { data } = await axios.delete(`${API}/${id}`);
    getData();
  } catch (error) {
    console.error(error);
  }
}

getData();
