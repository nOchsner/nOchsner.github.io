// Some edits to have the drawing area fit
let width = document.getElementsByTagName("main")[0].getBoundingClientRect()["width"] * .8;

function setup() {
    createCanvas(width, 400);
    background(102);
}
  
function draw() {
    stroke(255);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}



