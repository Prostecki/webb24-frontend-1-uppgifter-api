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

async function putData(userId, title, body) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`,
      {
        method: "PUT",
        body: JSON.stringify({
          userId: userId,
          id: userId,
          title: title,
          body: body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    if (!response.ok) {
      console.log(`HTTP Error!, ${response.status}`);
    }
    const putData = await response.json();
    console.log(putData);
  } catch (error) {
    console.error("Something wrong!");
  }
}

renderButton.addEventListener("click", (e) => {
  e.preventDefault();

  //Get values by inputs
  let userId = parseInt(inputId.value.trim());
  let userBody = inputBody.value.trim();

  //Check the ID if it's a number
  if (isNaN(userId) || !userBody) {
    console.log("Invalid input.");
  }
  //Update data
  putData(userId, `Updated body for Post ${userId}`, userBody);

  //Clear inputs
  inputBody.value = "";
  inputId.value = "";

  //Show post
  getUserId(userId);
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
    // container.appendChild(userTitle);
    // container.appendChild(userId);
    // container.appendChild(userBody);
  } else {
    console.log(`Post with ID ${post} not found.`);
    getError(post);
  }
}

function getError() {
  container.innerHTML = "";
  let userTitle = document.createElement("h2");
  userTitle.style.textAlign = "center";
  userTitle.textContent = `Post with ID ${userId} not found.`;
  container.appendChild(userTitle);
}

getData();
