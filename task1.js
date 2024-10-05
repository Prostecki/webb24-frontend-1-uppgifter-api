const tableContainer = document.getElementById("users-table");
const tableHead = document.createElement("thead");
const tableBody = document.createElement("tbody");
const addUsersButton = document.getElementById("add-users");

addUsersButton.addEventListener("click", getData);
// tableHead.appendChild(thElement);
// tableContainer.appendChild(tableHead);
const requestLink = "https://jsonplaceholder.typicode.com";

async function getData() {
  try {
    let requestLink2 = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    let data = await requestLink2.json();
    renderUser(data);
  } catch (error) {
    console.error(error);
  }
}

// function fetchUsers() {
//   fetch(`${requestLink}/users`)
//     .then((response) => {
//       console.log(response);
//       if (!response.ok) throw new Error("failed");
//       return response.json();
//     })
//     .then((users) => {
//       renderUser(users);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

function renderUser(data) {
  data.forEach((element) => {
    const usersName = document.createElement("td");
    usersName.classList.add("border-elements");
    const usersId = document.createElement("th");
    usersId.classList.add("border-elements");
    console.log(element);
    usersName.textContent = element.name;
    usersId.textContent = element.id;
    tableBody.appendChild(usersName);
    tableHead.appendChild(usersId);
  });
  tableContainer.appendChild(tableHead);
  tableContainer.appendChild(tableBody);
}

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
