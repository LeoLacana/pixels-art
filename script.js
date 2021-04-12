/*let elementPixel = document.getElementsByClassName('pixel');
let elementPixelBox = undefined;
for (let index = 0; index < elementPixel.length; index += 1){
  for (let index = 0; index < elementPixel.length; index += 1){
    elementPixelBox = document.createElement('div');
    elementPixelBox.className = 'box';
    elementPixel[index].appendChild(elementPixelBox);
  }
}*/

const elementPixel = document.getElementById('pixel-board');
let elementPixelBox;
for (let index = 0; index < 25; index += 1) {
  elementPixelBox = document.createElement('div');
  elementPixelBox.className = 'pixel';
  elementPixel.appendChild(elementPixelBox);
}
