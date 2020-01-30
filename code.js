function setup() {
  canvasDiv = document.getElementById('canvas');
  let sketchCanvas = createCanvas(canvasDiv.clientWidth, canvasDiv.clientHeight, P2D);
  sketchCanvas.parent('canvas');
  pixelDensity(3);
}

function draw() {
  background(234,234,175);

}

function windowResized() {
  resizeCanvas(canvasDiv.clientWidth, canvasDiv.clientHeight);
}
