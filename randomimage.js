function getRandomImage() {
var images = ['empty galleries/1.jpg', 'empty galleries/2.jpg', 'empty galleries/3.jpg'];
var image = images[Math.floor(Math.random()*images.length)];

return image;
}

function displayRandomImage() {
var htmlImage = document.getElementById("randomimage");
htmlImage.src = getRandomImage();
}
displayRandomImage();
