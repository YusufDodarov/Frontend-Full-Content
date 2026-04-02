const tbody = document.querySelector(".tbody");
fetch("users.json").then((response) => response.json())
  .then(result => {
    result.forEach((el) => {
      const select = document.createElement("select");
      el.status.forEach((statusValue) => {
        const option = document.createElement("option");
        option.value = statusValue;
        option.textContent = statusValue;
        if (statusValue === element.status[0]) {
          option.selected = true;
        }
        select.appendChild(option);
      });
      tbody.innerHTML += `
        <tr>
          <td><img class="avatar" src="${el.avatar}">${el.name}</td>
          <td>${el.age}</td>
          <td>${el.email}</td>
          <td>${el.phone}</td>
          <td class="status-cell"></td>
        </tr>
      `;
      const lastRow = tbody.lastElementChild;
      lastRow.querySelector(".status-cell").appendChild(select);
    });
  }).catch((error) => console.error(error.message));
