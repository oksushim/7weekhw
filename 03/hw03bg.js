const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

    const chosenImage = images[Math.floor(Math.random() *3)];
    const bgImage = document.createElement("img");
    bgImage.src = chosenImage;
    document.body.appendChild(bgImage);


