// let box = document.querySelector('.box');
//let element = document.createElement('div');
JsBarcode('#barcode', barCode, {
    format: 'CODE128', // формат штрих-кода
    displayValue: true, // отображать ли текстовое значение под кодом
    fontSize: 20, // размер шрифта
    width: 2, // ширина полос
    height: 100 // высота
  });