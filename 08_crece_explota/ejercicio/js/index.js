
// Hacer que el globlo crezca utilizando recursión
// https://www.learnrxjs.io/

const globo = document.getElementById('globo');

const { of } = rxjs;
const { delay, map, take, expand } = rxjs.operators;
