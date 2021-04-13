const elementBrushTool = document.getElementById('black');
elementBrushTool.className += ' selected';

const elementSelecRed = document.getElementById('red');
const elementSelecBlue = document.getElementById('blue');
const elementSelecGreen = document.getElementById('green');

const elementClassColor = document.getElementsByClassName('color');

function selectedColor(targetClicado) {
  for (let index = 0; index < elementClassColor.length; index += 1) {
    if (elementClassColor[index].classList.contains('selected') === true) {
      elementClassColor[index].classList.remove('selected');
    }
  }
  if (targetClicado.target.classList.contains('selected') !== true) {
    targetClicado.target.classList.add('selected');
  }
}

elementBrushTool.addEventListener('click', selectedColor);
elementSelecRed.addEventListener('click', selectedColor);
elementSelecBlue.addEventListener('click', selectedColor);
elementSelecGreen.addEventListener('click', selectedColor);

const elementPixel = document.getElementById('pixel-board');
let elementPixelBox;
for (let index = 0; index < 25; index += 1) {
  elementPixelBox = document.createElement('div');
  elementPixelBox.className = 'pixel';
  elementPixel.appendChild(elementPixelBox);
}

function colorise(coloriseClick) {
  for (let index = 0; index < elementClassColor.length; index += 1) {
    if (elementClassColor[index].classList.contains('selected') === true) {
      coloriseClick.target.id = elementClassColor[index].id;
    }
  }
}

const elementClick = document.getElementsByClassName('pixel');

for (let index = 0; index < elementClick.length; index += 1) {
  elementClick[index].addEventListener('click', colorise);
}
