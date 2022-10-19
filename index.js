
//Gallery background script
let possible_gallery_images;
let gallery;

function preload(){
//create an array of gallery image file names
    possible_gallery_images = [
    "galleries/1.jpg",
    "galleries/2.jpg",
    "galleries/10.jpg",
    "galleries/8.jpg",
];

//pick a random gallery image
let pos = floor(random(possible_gallery_images.length));

//load the picked image
gallery = loadImage(possible_gallery_images[pos]);
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(204);
    image(gallery, 0, 0, windowWidth+3, windowHeight+4);
}

//make it fill whole window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}