var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var btnRed = document.getElementById("red");
var btnGreen = document.getElementById("green");
var btnBlue = document.getElementById("blue");
var btnReset = document.getElementById("reset");

var colorArray = ["#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "#2980B9"];

class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }
}

var y = 50;
var dy = 0;
var radius = 40;
var circleArray = [];

function init(color) {
  var x = 50;
  var dx = 100;
  circleArray = [];
  for (let index = 0; index < 4; index++) {
    var circle = new Circle(x, y, radius, color);
    circleArray.push(circle);
    x += dx;
    y += dy;
  }
  for (let index = 0; index < circleArray.length; index++) {
    circleArray[index].draw();
  }
}

function update(color) {
  var x = 50;
  var dx = 100;
  var lastClicked = undefined;
  ctx.clearRect(0, 0, 350, 150);
  if (color.toLowerCase() === "red") {
    if (!lastClicked) {
      x = 50;
    }
    init(color);
    lastClicked = "red";
  } else if (color.toLowerCase() === "green") {
    if (
      lastClicked === "red" ||
      lastClicked === "blue" ||
      lastClicked === undefined
    ) {
      x = 50;
    }
    x += dx;
    init(color);
    lastClicked = "green";
  } else if (color.toLowerCase() === "blue") {
    if (
      lastClicked === "red" ||
      lastClicked === "green" ||
      lastClicked === undefined
    ) {
      x = 50;
    }
    x += 2 * dx;
    init(color);
    lastClicked = "blue";
  } else {
    console.log("Invalid Option");
  }
}

btnRed.addEventListener("click", function() {
  update("red");
});

btnGreen.addEventListener("click", function() {
  update("green");
});

btnBlue.addEventListener("click", function() {
  update("blue");
});

btnReset.addEventListener("click", function() {
  init("#ECF0F1");
});

init("#ECF0F1");
