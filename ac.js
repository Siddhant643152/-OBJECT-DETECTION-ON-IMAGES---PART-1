function preload(){
img1 = loadImage("AC.jpeg");
}
function setup() {
    canvas = createCanvas(800,600);
    canvas.center();
}
function draw() {
    image(img1, 0, 0, 800, 600);
}