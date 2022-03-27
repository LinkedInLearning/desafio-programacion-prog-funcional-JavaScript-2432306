
const boton = document.getElementById('boton');
const activo = document.getElementById('activo');

const { BehaviorSubject, fromEvent } = rxjs;
const { filter, shareReplay, startWith, map } = rxjs.operators;

fromEvent(activo, 'change').subscribe(() => boton.disabled = activo.checked);
