import './style.css'

const COLOR_PALETTE = {
  '#264653': 'Charcoal',
  '#2A9D8F': 'Persian Green',
  '#E9C46A': 'Maize Crayola',
  '#F4A261': 'Sandy Brown',
  '#E76F51': 'Burnt Sienna'
};

const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement('option');
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  });
}

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector('#color-picker');
  const colorPickerSelectInput = document.querySelector('#color-picker-input');
  const colorName = document.querySelector('#color-name');
  colorPickerSelect.addEventListener('change', (event) => {     
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    const colorNameText = `${COLOR_PALETTE[newColor]} | ${newColor}`;
    colorName.innerText = COLOR_PALETTE[newColor] ? colorNameText : '-';
  });
  colorPickerSelectInput.addEventListener('input', (event) => {     // Si lo hago con 'input' en lugar de un 'change' se cambia la sección select por una paleta de colores
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    const colorNameText = `${newColor}`;
    colorName.innerText = newColor ? colorNameText : '-';
  });
};

addOptionsToColorPicker();
addEventListenerToColorPicker();
