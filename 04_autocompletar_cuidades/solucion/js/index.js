
// Implementar un buscador de cuidades donde las sugerencias se muestren conforme el usuario
// escriba texto en el campo input

const input = document.getElementById('input');
const resultados = document.getElementById('resultados');

const { fromEvent } = rxjs;
const { map } = rxjs.operators;

fromEvent(input, 'input')
.pipe(map(() => input.value.toLowerCase()), map(valor=> CIUDADES.filter((cuidad)=> cuidad.toLowerCase().indexOf(valor) > -1)))
.subscribe(cuidadesFiltradas=>{
    resultados.innerHTML = '';
    for(const ciudad of cuidadesFiltradas){
        const  p =document.createElement('p');
        p.innerText = ciudad;
        resultados.appendChild(p);
    }
})

