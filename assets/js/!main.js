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
   // let element = document.createElement('div');
  // element.setAttribute('id', item.toString);
  //element.className = 'element';
  let box = document.querySelector('#box');
  let divBc = document.createElement('div');
  box.appendChild(divBc);
  let svg = document.createElement('svg');
  svg.id = `s${index}`;
  divBc.appendChild(svg);
  JsBarcode(`#s${index}`, item, {
    format: 'CODE128', // формат штрих-кода
    displayValue: true, // отображать ли текстовое значение под кодом
    fontSize: 20, // размер шрифта
    width: 2, // ширина полос
    height: 100 // высота
  });
})
/* barCodeList.forEach((item, index, element) => {
  console.log(index);
  console.log(`#s${index}`);
  JsBarcode('#s0', item, {
    format: 'CODE128', // формат штрих-кода
    displayValue: true, // отображать ли текстовое значение под кодом
    fontSize: 20, // размер шрифта
    width: 2, // ширина полос
    height: 100 // высота
  });
}) */
