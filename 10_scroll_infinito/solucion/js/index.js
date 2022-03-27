
// Implementar scroll infinito en la página:

const contenedor = document.getElementById('contenedor');

const { fromEvent } = rxjs;
const { map, filter } = rxjs.operators;

fromEvent(document, 'scroll').pipe(map(() => {
    const alturaDocumento = document.documentElement.scrollHeight;
    const alturaVentana = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    return scrollTop + alturaVentana === alturaDocumento;
}), filter(valor => valor === true))
    .subscribe(() => contenedor.appendChild(document.createElement('li')));