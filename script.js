window.onload = function() {
  let brushTool = document.createElement('div');
  brushTool.className = 'selected';
  brushTool.style.backgroundColor = 'black';
}
const elementPixel = document.getElementById('pixel-board');
let elementPixelBox;
for (let index = 0; index < 25; index += 1) {
  elementPixelBox = document.createElement('div');
  elementPixelBox.className = 'pixel';
  elementPixel.appendChild(elementPixelBox);
}
