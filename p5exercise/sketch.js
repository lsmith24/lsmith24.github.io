let rSlider;
let gSlider;
let bSlider;

function setup() {
  let canvas = createCanvas(700, 700);
  canvas.class("right");
  background(181, 206, 247);

  rSlider = createSlider(0, 255, 50);
  rSlider.class("r");
  gSlider = createSlider(0, 255, 200);
  gSlider.class("g");
  bSlider = createSlider(0, 255, 100);
  bSlider.class("b");
}

function draw() {
  
}

function mouseDragged() {
  if (mouseX > 0 && mouseX < 700 && mouseY < 700) {
    let x = random(width);
    let y = random(height);
    fill(rSlider.value(), gSlider.value(), bSlider.value());
    let shapes = [0, 1, 2];
    let shape = random(shapes);
    if (shape == 0) {
      triangle(x, y, x + 25, y + 35, x + 50, y);
    } else if (shape == 1) {
      circle(x, y, random(3, 50));
    } else {
      square(x, y, random(3, 50));
    }
  }
  
}