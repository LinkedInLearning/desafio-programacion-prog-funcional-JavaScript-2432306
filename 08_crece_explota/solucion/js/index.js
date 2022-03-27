
// Hacer que el globlo crezca utilizando recursión
// https://www.learnrxjs.io/

const globo = document.getElementById('globo');

const { of } = rxjs;
const { delay, map, take, expand } = rxjs.operators;

of(1).pipe(expand(valor => of(valor + 1).pipe(delay(1000))),
    map(valor => `${valor * 100}px`),
    take(10))
    .subscribe(valorCSS => {
        globo.style.width = valorCSS;
        globo.style.height = valorCSS;
        globo.style.borderRadius = valorCSS;
    });