// let box = document.querySelector('.box');
//let element = document.createElement('div');
JsBarcode('#barcode', barCode, {
  format: 'CODE128', // формат штрих-кода
  displayValue: true, // отображать ли текстовое значение под кодом
  fontSize: 20, // размер шрифта
  width: 2, // ширина полос
  height: 100 // высота
});
JsBarcode('#barcode2', barCode, {
  format: 'CODE128', // формат штрих-кода
  displayValue: true, // отображать ли текстовое значение под кодом
  fontSize: 20, // размер шрифта
  width: 2, // ширина полос
  height: 100 // высота
});
barCodeList.forEach((item, index, array) => {
  let box = document.querySelector('#box');
  let element = document.createElement('div');
  // element.setAttribute('id', item.toString);
  element.className = 'element';
  box.appendChild(element);
  let svg = document.createElement('svg');
  element.appendChild(svg);
  svg.id = `s${item}`;
})
barCodeList.forEach((item, index, element) => {
  console.log(`#s${item}`);
  JsBarcode(`#s${item}`, barCode, {
    format: 'CODE128', // формат штрих-кода
    displayValue: true, // отображать ли текстовое значение под кодом
    fontSize: 20, // размер шрифта
    width: 2, // ширина полос
    height: 100 // высота
  });
})