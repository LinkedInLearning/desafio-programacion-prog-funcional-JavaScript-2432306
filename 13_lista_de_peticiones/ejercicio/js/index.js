//Cargar una imágen cada vez que el usuario haga click en el botón cargar.

const cargar = document.getElementById('cargar');

function generarContenedorImagen() {
    const span = document.createElement('span');
    span.innerText = 'CARGANDO';
    document.body.appendChild(span);
    return span;
}

function imgAleatoria() {
    const i = Math.floor(Math.random() * 22);
    return imagenes[i].src;
}

const { forkJoin, fromEvent } = rxjs;
const { fromFetch } = rxjs.fetch;
const { switchMap, map, takeUntil } = rxjs.operators;

const arr = [];
