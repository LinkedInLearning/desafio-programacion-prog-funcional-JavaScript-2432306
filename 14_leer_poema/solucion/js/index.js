
// Implementar la validación dek formulario urilizando RxJS.
// Si el formulario es inválido, el botón Envíar debe desactivarse.
// Lo contrario si el formulario es válido.

const contenedor = document.getElementById('contenedor');

const poema = [
    { texto: 'Quiero vivir la vida aventurera', tiempo: 1000 },
    { texto: 'de los errantes pájaros marinos;', tiempo: 3000 },
    { texto: 'no tener, para ir a otra ribera,', tiempo: 5000 },
    { texto: 'la prosaica visión de los caminos.', tiempo: 7000 },
    { texto: 'Poder volar cuando la tarde muera', tiempo: 9000 },
    { texto: 'entre fugaces lampos ambarinos,', tiempo: 11000 },
    { texto: 'y oponer a los raudos torbellinos', tiempo: 13000 },
    { texto: 'el ala fuerte y la mirada fiera.', tiempo: 15000 },
    { texto: 'Huir de todo lo que sea humano;', tiempo: 17000 },
    { texto: 'embriagarme de azul… Ser soberano', tiempo: 19000 },
    { texto: 'de dos inmensidades: mar y cielo;', tiempo: 21000 },
    { texto: 'y cuando sienta el corazón cansado', tiempo: 23000 },
    { texto: 'morir sobre un peñón abandonado', tiempo: 25000 },
    { texto: 'con las alas abiertas para el vuelo.', tiempo: 27000 },
];

const { from, of } = rxjs;
const { map, delay, mergeMap } = rxjs.operators

from(poema)
    .pipe(mergeMap(linea => of(linea)
        .pipe(delay(linea.tiempo))),
        map(linea => linea.texto))
    .subscribe(texto => agregarLinea(texto));

function agregarLinea(linea) {
    const texto = document.createElement('p');
    texto.innerText = linea;
    contenedor.appendChild(texto);
}


