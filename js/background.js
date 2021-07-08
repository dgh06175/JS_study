const images = [
    "space1.jpg",
    "space2.jpg",
    "lake.jpg"
]

const daysImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${daysImage}`;
document.body.appendChild(bgImage);