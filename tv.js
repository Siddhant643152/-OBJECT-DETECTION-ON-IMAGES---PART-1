function preload(){
img4 = loadImage("TV.jpeg");
}
function setup() {
    canvas = createCanvas(800,600)
    canvas.center()
}
function draw() {
    image(img4, 0, 0, 800, 600);
}