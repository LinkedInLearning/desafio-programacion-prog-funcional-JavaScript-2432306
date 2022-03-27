
// Implementar scroll infinito en la página:

const contenedor = document.getElementById('contenedor');

const { fromEvent } = rxjs;
const { map, filter } = rxjs.operators;
