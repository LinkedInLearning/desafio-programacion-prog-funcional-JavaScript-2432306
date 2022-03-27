
function generarNumeroAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function generarRocas() {

    var fragmento = new DocumentFragment();

    for (let i = 0; i <= 50; i++) {
        const elemento = document.createElement('div');
        elemento.style.position = 'absolute';
        elemento.style.width = `${generarNumeroAleatorio(70)}px`;
        elemento.style.height = `${generarNumeroAleatorio(70)}px`;
        elemento.style.top = `${generarNumeroAleatorio(window.innerHeight)}px`;
        elemento.style.left = `${generarNumeroAleatorio(window.innerWidth)}px`;
        elemento.style.borderRadius = '10px';
        elemento.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        fragmento.appendChild(elemento);
    }

    document.body.appendChild(fragmento);
}

generarRocas();

// Determinar si el puntero se encuentra encima del fondo de la pantalla 
// o si esta tocando algún elemento en la página.

const resultado = document.getElementsByTagName('span')[0];

const { fromEvent } = rxjs;
const { map } = rxjs.operators;
