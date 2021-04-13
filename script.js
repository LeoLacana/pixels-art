const elementPixel = document.getElementById('pixel-board');
let elementPixelBox;
for (let index = 0; index < 25; index += 1) {
  elementPixelBox = document.createElement('div');
  elementPixelBox.className = 'pixel';
  elementPixel.appendChild(elementPixelBox);
}

const elementBrushTool = document.getElementById('black');
elementBrushTool.className += ' selected';

const elementSelecRed = document.getElementById('red');
const elementSelecBlue = document.getElementById('blue');
const elementSelecGreen = document.getElementById('green');

elementBrushTool.addEventListener('click', selectedColor);
elementSelecRed.addEventListener('click', selectedColor);
elementSelecBlue.addEventListener('click', selectedColor);
elementSelecGreen.addEventListener('click', selectedColor);


function selectedColor (targetClicado) {
  let elementClassColor = document.getElementsByClassName('color');
  for (index = 0; index < elementClassColor.length; index += 1){
    if (elementClassColor[index].classList.contains('selected') === true){
      elementClassColor[index].classList.remove('selected');
    }
  }
  if (targetClicado.target.classList.contains('selected') !== true){
    targetClicado.target.classList.add('selected');
  }
  
  
}
