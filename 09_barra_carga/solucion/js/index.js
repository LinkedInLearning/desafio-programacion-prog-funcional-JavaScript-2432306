
const barra = document.getElementById('barra');

const { timer } = rxjs;
const { map, take } = rxjs.operators;

timer(100, 100).pipe(map(i => `${i}% auto`), take(100))
.subscribe(valor => barra.style.backgroundSize = valor);

