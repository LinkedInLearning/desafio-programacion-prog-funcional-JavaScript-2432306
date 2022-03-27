
const boton = document.getElementById('boton');
const activo = document.getElementById('activo');

const { BehaviorSubject, fromEvent } = rxjs;
const { filter, shareReplay, startWith, map } = rxjs.operators;

//fromEvent(activo, 'change').subscribe(() => boton.disabled = activo.checked);

const botonEstado = fromEvent(activo, 'change').pipe(map(() => activo.checked));

const botonDeshabilitado = botonEstado.pipe(
    filter(valor => valor === true),
    startWith(false),
    shareReplay(1)).subscribe(valor => boton.disabled = valor);


