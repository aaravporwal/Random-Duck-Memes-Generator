const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg"
];

function displayRandomImage() {
  const container = document.getElementById("image-container");
  const randomIndex = Math.floor(Math.random() * images.length);
  const imagePath = images[randomIndex];
  const imageElement = document.createElement("img");
  imageElement.setAttribute("src", imagePath);
  container.innerHTML = "";
  container.appendChild(imageElement);
}