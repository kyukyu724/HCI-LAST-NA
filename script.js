document.addEventListener("DOMContentLoaded", function () {
    const imageContainer = document.querySelector(".image-container");
    const images = document.querySelectorAll(".about-image");
    let index = 0;

    // Set the initial position
    imageContainer.style.transform = `translateX(0)`;

    function slideImages() {
        index = (index + 1) % images.length; // Loops seamlessly
        imageContainer.style.transform = `translateX(-${index * 65}vmin)`; // Adjusted to match image width
    }

    setInterval(slideImages, 3000); // Moves every 3 seconds
});