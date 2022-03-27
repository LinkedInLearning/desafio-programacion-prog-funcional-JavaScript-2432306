
const boton = document.getElementById('boton');

function random(max) {
    return Math.floor(Math.random() * max);
}

function crearOndaHTML() {
    const onda = document.createElement("span");
    const diametro = Math.max(document.documentElement.clientWidth, document.documentElement.clientHeight);
    const radio = diametro / 2;
    onda.style.width = onda.style.height = `${diametro}px`;
    onda.style.left = `${random(document.documentElement.clientWidth) - radio}px`;
    onda.style.top = `${random(document.documentElement.clientHeight) - radio}px`;
    onda.classList.add('onda');
    return onda;
}

const { fromEvent } = rxjs;
const { take, mergeMap, finalize } = rxjs.operators;
