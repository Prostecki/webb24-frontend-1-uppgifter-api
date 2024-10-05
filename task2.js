async function getPhotoData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    console.log(data);
    renderPhotos(data);
  } catch {
    console.error("something wrong");
  }
}

const photoContainer = document.getElementById("container");
const renderButton = document.getElementById("render-button");
renderButton.addEventListener("click", getPhotoData);

function renderPhotos(data) {
  data.forEach((element) => {
    let photoElement = document.createElement("img");
    let photoTitle = document.createElement("p");
    let photoBox = document.createElement("div");
    photoBox.classList.add("photo-box");
    photoElement.classList.add("img-styling");
    photoElement.src = element.thumbnailUrl;
    photoElement.alt = element.title;
    photoTitle.textContent = element.title;
    photoBox.appendChild(photoElement);
    // photoBox.appendChild(photoTitle);
    photoContainer.appendChild(photoBox);
  });
}
