

var possible_dog_images;
var dog;
var heart;
var dog1, dog2, heart;


function preload(){
  //create an array of dog image file names
  possible_dog_images = [
    "galleries/1.jpg",
    "galleries/2.jpg",
    "galleries/10.jpg",
    "galleries/8.jpg",
  ];

//pick a random dog image
var pos = floor(random(possible_dog_images.length));

//load the picked image
dog = loadImage(possible_dog_images[pos]);
}

function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
background(204);
image(dog, 0, 0, windowWidth+3, windowHeight+4);
}
function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}