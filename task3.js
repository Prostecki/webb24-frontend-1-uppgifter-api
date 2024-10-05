// async function getInfo() {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com${posts}?userId${id}`
//     );
//     const info = await response.json();
//     renderInfo(info);
//     console.log(info);
//     getUserId(id);
//   } catch {
//     console.error("Something wrong! Try again");
//   }
// }

const container = document.getElementById("container");
const renderButton = document.getElementById("render-button");
const inputBody = document.getElementById("input-text");
const inputTitle = document.getElementById("input-title");
const form = document.getElementById("form");

// renderButton.addEventListener("click", getInfo);

function renderInfo(info) {
  info.forEach((element) => {
    let userName = document.createElement("p");
    userName.textContent = element.name;
    container.appendChild(userName);
  });
}

// Uppgift 2

// renderButton.addEventListener("click", async (event) => {
//   event.preventDefault(); // Prevent the default form submission behavior

//   // Get the user ID from the input field and trim any whitespace
//   const userId = input.value.trim();

//   try {
//     // Make a GET request to fetch posts for the specified user ID
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
//     );
//     console.log(response);

//     // Parse the response body as JSON
//     const posts = await response.json();

//     // Call the function to display the posts on the page
//     displayPosts(posts);

//     console.log(posts);
//   } catch (error) {
//     // Log any errors that occur during the fetch
//     console.error("Something wrong!");
//   }
// });

// // Function to display posts on the page
// function displayPosts(posts) {
//   // Clear the container before displaying new posts
//   container.innerHTML = "";

//   // Check if the posts array is empty
//   if (posts.length === 0) {
//     console.log("There aren't posts for the user"); // Log if no posts found
//     return; // Exit the function if there are no posts
//   }

//   const post = posts[0];
//   // Append the post's title and body to the container
//   container.innerHTML += `
//       <h2>${post.title}</h2>
//       <p>${post.body}</p>`;

//   // Clear the input field after displaying the posts
//   input.value = "";
// }

// uppgift 3
async function getData(userData) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    displayData(data);
    console.log(userData);
  } catch (error) {
    console.error(error);
  }
}

function displayData(item) {
  console.log(`Title: ${item.title}`);
  console.log(`Body: ${item.body}`);
}

renderButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const userData = {
    title: inputTitle.value.trim(),
    body: inputBody.value.trim(),
  };
  await getData(userData);
});
