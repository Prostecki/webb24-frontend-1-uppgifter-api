const container = document.getElementById("container");
const renderButton = document.getElementById("render-button");
const inputId = document.getElementById("input-title");
const inputBody = document.getElementById("input-text");
const form = document.getElementById("form");

let postsData = [];

async function getData() {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (!response.ok) {
      throw new Error(`Error, ${response.status}`);
    }
    postsData = await response.json();
    console.log(postsData);
  } catch (error) {
    console.error("Something wrong!");
  }
}

async function deleteData(userId) {
  const post = postsData.find((item) => item.id === userId);

  if (!post) {
    console.log(`Post with ID ${userId} not found.`);
    getError(userId);
    return;
  }
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (!response.ok) {
      console.log(`HTTP Error!, ${response.status}`);
    }
    console.log(`User was deleted with id: ${userId}`);
    showDeletedPost(post);
  } catch (error) {
    console.error("Something wrong!");
  }
}

renderButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userId = parseInt(inputId.value.trim());
  if (isNaN(userId) || userId === 0) {
    console.log("Invalid ID");
    return;
  }
  deleteData(userId);
  //   getUserId(userId);
  inputId.value = "";
});

function getUserId(userId) {
  container.innerHTML = "";
  const post = postsData.find((item) => item.id === userId);
  if (post) {
    let postTitle = document.createElement("h2");
    let postId = document.createElement("h4");
    let postBody = document.createElement("p");

    postTitle.textContent = `User Title: ${post.title}`;
    postId.textContent = `User ID: ${post.id}`;
    postBody.textContent = `User Text: ${post.body}`;

    container.appendChild(postTitle);
    container.appendChild(postId);
    container.appendChild(postBody);
  } else {
    console.log(`Post with ID ${post} not found.`);
    getError(userId);
  }
}

function getError(userId) {
  container.innerHTML = "";
  let errorTitle = document.createElement("h2");
  errorTitle.style.textAlign = "center";
  errorTitle.textContent = `Post with ID ${userId} not found.`;
  container.appendChild(errorTitle);
}

function showDeletedPost(post) {
  container.innerHTML = "";
  let postTitle = document.createElement("h2");
  let postId = document.createElement("h4");
  let postBody = document.createElement("p");

  postTitle.textContent = `Deleted Post Title: ${post.title}`;
  postId.textContent = `Deleted Post ID: ${post.id}`;
  postBody.textContent = `Deleted Post Body: ${post.body}`;

  container.appendChild(postTitle);
  container.appendChild(postId);
  container.appendChild(postBody);
}

getData();
