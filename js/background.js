const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

const daysImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${daysImage}`;
document.body.append(bgImage);