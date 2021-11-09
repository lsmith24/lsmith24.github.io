let circle = document.querySelector(".circle");
let trail = [];
let colors = ["white", "#ff0400", "#ffa200", "#ffff1c", "#08ff18", "#08eaff", "#8880ff", "#c336ff", "#ff29bf"];
let mouse = {
	x: 0,
	y: 0
};
let index = 0;

function addDot() {
	let newDot = document.createElement("div");
	newDot.classList.add("circle");
	newDot.style.background = colors[index];
	index++;
	document.body.appendChild(newDot);
	return newDot;
}

function Dot() {
  this.x = 0;
  this.y = 0;
  console.log("new dot");
  this.node = addDot();
};

Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};

for (let i = 0; i < colors.length; i++) {
	let dot = new Dot();
	trail.push(dot);
}

function drawDot() {
  let x = mouse.x,
      y = mouse.y;
  let idx = 0;

  trail.forEach(function () {
    let nextDot = trail[idx + 1] || trail[0];
    let dot = trail[idx];
    idx++;
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * 0.8;
    y += (nextDot.y - dot.y) * 0.8;
  });
}

function onMouseMove(event) {
	mouse.x = event.pageX;
	mouse.y = event.pageY;
}

function animate() {
  drawDot();
  requestAnimationFrame(animate);
}

document.addEventListener("mousemove", onMouseMove);
animate();

