const container = document.getElementById("container");
const renderButton = document.getElementById("render-button");
const inputBody = document.getElementById("input-text");
const form = document.getElementById("form");

let postsData = [];

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`Error, ${response.status}`);
    }
    postsData = await response.json();
    console.log(postsData);
  } catch (error) {
    console.error("Something wrong!");
  }
}

renderButton.addEventListener("click", (e) => {
  let userId = parseInt(inputBody.value.trim());
  e.preventDefault();
  getUserId(userId);
  inputBody.value = "";
});

function getUserId(userId) {
  container.innerHTML = "";
  const post = postsData.find((item) => item.id === userId);
  if (post) {
    let userTitle = document.createElement("h2");
    let userId = document.createElement("h4");
    let userBody = document.createElement("p");
    userTitle.textContent = `User Title: ${post.title}`;
    userId.textContent = `User ID: ${post.id}`;
    userBody.textContent = `User Text: ${post.body}`;
    container.appendChild(userTitle);
    container.appendChild(userId);
    container.appendChild(userBody);
  } else {
    console.log(`Post with ID ${userId} not found.`);
  }
}

getData();
