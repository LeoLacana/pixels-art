// função que randomiza cores
const colorRandomizer = (opacidade = 1) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
};

// função que remove a classe selected do elemento que a possui
// após isso adiciona a mesma classe no elemento clicado
const removeAndAddClassSelected = ({ target }) => {
  const paletteColors = document.getElementsByClassName('color');
  for (let i = 0; i < paletteColors.length; i += 1) {
    if (paletteColors[i].classList.contains('selected')) {
      paletteColors[i].classList.remove('selected');
    }
  }
  target.classList.add('selected');
};

const pixelGenerator = (size, elementFather) => {
  for (let i = 1; i <= size; i += 1) {
    const boxPixelElement = document.createElement('div');
    boxPixelElement.classList.add(`linha${size}`);
    elementFather.appendChild(boxPixelElement);
    for (let index = 1; index <= size; index += 1) {
      const pixelLine = document.createElement('div');
      pixelLine.classList.add('pixel');
      boxPixelElement.appendChild(pixelLine);
    }
  }
};

// seleciona a primeira cor da paleta e atribui a cor preta
const colorPaletElement = document.getElementById('color-1');
colorPaletElement.style.backgroundColor = 'black';

// seleciona da terceira a quarta cor da paleta e atribui
// cores aleatórias através da da função colorRandomizer
const paletteColors = document.getElementsByClassName('color');
for (let i = 1; i < paletteColors.length; i += 1) {
  paletteColors[i].style.backgroundColor = colorRandomizer();
}

// cria um evento de adicionar o selected em cada cor da paleta
for (let i = 0; i < paletteColors.length; i += 1) {
  paletteColors[i].addEventListener('click', removeAndAddClassSelected);
}

// seleciona elemento com classe selected
// depois seleciona cada pixel e adiciona a ele evento de click
// que o atribuir style de backgroundColor do elemento com classe selected
const elementWithClassSelected = document.getElementsByClassName('selected');
const pixelElement = document.getElementsByClassName('pixel');
for (let i = 0; i < pixelElement.length; i += 1) {
  pixelElement[i].addEventListener('click', ({ target }) => {
    // eslint-disable-next-line no-param-reassign
    target.style.backgroundColor = elementWithClassSelected[0].style.backgroundColor;
  });
}

// seleciona botão de limpar
// depois o atribui evento de adicionar a ele o style de background color white
const clearButtonElement = document.getElementById('clear-board');
clearButtonElement.addEventListener('click', () => {
  for (let i = 0; i < pixelElement.length; i += 1) {
    pixelElement[i].style.backgroundColor = 'white';
  }
});

const buttonBoxSizeElement = document.getElementById('generate-board');
const inputBoxSizeElement = document.getElementById('board-size');
const pixelBox = document.getElementById('pixel-board');
buttonBoxSizeElement.addEventListener('click', () => {
  if (inputBoxSizeElement.value === '') {
    alert('Board inválido!');
  } else if (inputBoxSizeElement.value < 5) {
    pixelBox.innerHTML = '';
    pixelGenerator(5, pixelBox);
  } else if (inputBoxSizeElement.value > 50) {
    pixelBox.innerHTML = '';
    pixelGenerator(50, pixelBox);
  } else {
    pixelBox.innerHTML = '';
    pixelGenerator(inputBoxSizeElement.value, pixelBox);
  }
});
