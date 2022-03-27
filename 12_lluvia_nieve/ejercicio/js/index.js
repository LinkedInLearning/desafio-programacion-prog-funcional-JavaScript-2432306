
const contenedor = document.getElementById('contenedor');
const cambiar = document.getElementById('cambiar');

function obtenerVelocidadLluvia() {
    var pos = Math.floor((Math.random() * 100) + 1);
    var delay = Math.random();
    var velocidad = (Math.random() * 0.5) + 0.2;
    return { pos, delay, velocidad, clase: 'gota' };
}

function obtenerVelocidadNieve() {
    var pos = Math.floor((Math.random() * 100) + 1);
    var delay = Math.random();
    var velocidad = (Math.random() * 1.5) + 3;
    return { pos, delay, velocidad, clase: 'copo' };
}

function crearElemento(clase, pos) {
    const el = document.createElement("div");
    el.className = clase;
    el.style.left = pos + "%";
    return el;
}

function moverElemento(el, movInfo) {
    TweenMax.to(el, movInfo.velocidad, {
        y: 1000,
        delay: movInfo.delay,
        ease: Linear.easeNone,
        onComplete: function () { contenedor.removeChild(el) },
    });
}

// Crear la animación de lluvia o nieve utilizando las funciones de arriba.
// obtenerVelocidadLluvia() o obtenerVelocidadNieve() deben llamarse según
// la animación que se esté mostrando.

const { timer, iif, of, fromEvent } = rxjs;
const { map, mergeMap, withLatestFrom, startWith } = rxjs.operators;
