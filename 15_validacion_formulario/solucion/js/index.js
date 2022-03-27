
// Implementar la validación del formulario urilizando RxJS.
// Si el formulario es inválido, el botón Envíar debe desactivarse.
// Lo contrario si el formulario es válido.

const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');
const enviar = document.getElementById('enviar');

const telRegex = new RegExp(/[0-9]{4}-[0-9]{2}-[0-9]{2}/, 'g');
const emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{3,}))$/, 'g');

const { fromEvent, combineLatest } = rxjs;
const { map, startWith } = rxjs.operators;

const nombre$ = fromEvent(nombre, 'input')
.pipe(map(()=> nombre.value !== ''), startWith(false));

const email$ = fromEvent(email, 'input')
.pipe(map(()=> emailRegex.test(email.value)), startWith(false));

const telefono$ = fromEvent(telefono, 'input')
.pipe(map(()=> telRegex.test(telefono.value)), startWith(false));

combineLatest([nombre$, email$, telefono$])
.pipe(map(([nombreValido, emailValido, telValido])=>{
    return nombreValido && emailValido && telValido;
})).subscribe(formularioValido=> enviar.disabled = !formularioValido);