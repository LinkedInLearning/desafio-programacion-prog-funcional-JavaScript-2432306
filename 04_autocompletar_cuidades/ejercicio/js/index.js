
// Implementar un buscador de cuidades donde las sugerencias se muestren conforme el usuario
// escriba texto en el campo input

const input = document.getElementById('input');
const resultados = document.getElementById('resultados');

const { fromEvent } = rxjs;
const { map } = rxjs.operators;
