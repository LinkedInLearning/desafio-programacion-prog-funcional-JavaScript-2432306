const colores = document.getElementById('colores');
const resultado = document.getElementById('resultado');

const infoColores = {
    'rojo': [255, 0, 0],
    'azul': [0, 0, 255],
    'amarillo': [255, 255, 0],
    'blanco': [255, 255, 255],
    'negro': [0, 0, 0]
};

function generarColores() {
    for (const color of Object.keys(infoColores)) {
        const boton = document.createElement('button');
        boton.style.backgroundColor = arregloARGBA(infoColores[color]);
        boton.innerText = color.toUpperCase();
        colores.appendChild(boton);
    }
}
generarColores();

function mezcladorCanalColor(colorA, colorB) {
    var canalA = colorA * 0.5;
    var canalB = colorB * (1 - 0.5);
    return parseInt(canalA + canalB);
}

function mezclarColores(rgbA, rgbB) {
    var r = mezcladorCanalColor(rgbA[0], rgbB[0]);
    var g = mezcladorCanalColor(rgbA[1], rgbB[1]);
    var b = mezcladorCanalColor(rgbA[2], rgbB[2]);
    return arregloARGBA([r, g, b]);
}

function arregloARGBA(valores) {
    return "rgb(" + valores[0] + "," + valores[1] + "," + valores[2] + ")";
}

// Implementar un mezclador de colores.

const { fromEvent, Subject, combineLatest } = rxjs;
const { filter, map } = rxjs.operators;

