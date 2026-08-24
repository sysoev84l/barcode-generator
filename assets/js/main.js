const container = document.getElementById("barcodes");

ok = document.getElementById('ok');
ok.addEventListener('click', function(e) {
    uploadFile();
})

values.forEach((value, i) => {
    // Обёртка с подписью
    const wrapper = document.createElement("div");
    wrapper.className = "barcode-item";

    // SVG-элемент для штрихкода
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = `barcode-${i}`;
    wrapper.appendChild(svg);

    // Подпись значением
    //const label = document.createElement("p");
    //label.textContent = value;
    //wrapper.appendChild(label);

    container.appendChild(wrapper);

    // Генерация штрихкода
    try {
        JsBarcode(svg, value, {
            format: "CODE128",     // авто-режим, принимает любые ASCII-строки
            width: 3,
            height: 150,
            displayValue: true,
            margin: 10,
            fontSize: 38
        });
    } catch (e) {
        console.error(`Не удалось сгенерировать штрихкод для "${value}":`, e.message);
    }
});