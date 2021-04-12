const elementPixel = document.getElementById('pixel-board');
let elementPixelBox;
for (let index = 0; index < 25; index += 1) {
  elementPixelBox = document.createElement('div');
  elementPixelBox.className = 'pixel';
  elementPixel.appendChild(elementPixelBox);
}

let elementBrushTool = document.getElementById('black');
elementBrushTool.className += " selected";
