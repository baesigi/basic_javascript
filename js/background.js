const images = ["0.jpg", "1.png" ]
const background = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${background}`;

document.body.appendChild(bgImage);