
// Buscar elemento dentro del DOM utilizando recursión y RxJS.

const elemento = 'Elemento9';
let encontrado = false;

const { EMPTY, from, Subject, of } = rxjs;
const { expand, takeWhile } = rxjs.operators;
