//Cargar una imágen cada vez que el usuario haga click en el botón cargar.

const cargar = document.getElementById('cargar');

function generarContenedorImagen() {
    const span = document.createElement('span');
    span.innerText = 'CARGANDO';
    document.body.appendChild(span);
    return span;
}

function imgAleatoria() {
    const i = Math.floor(Math.random() * 22);
    return imagenes[i].src;
}

const { forkJoin, of, fromEvent } = rxjs;
const { fromFetch } = rxjs.fetch;
const { switchMap, map, takeUntil } = rxjs.operators;

function cargarImagen(url){
    const contenedor = generarContenedorImagen();
    fromFetch(url)
    .pipe(switchMap(respuesta=> respuesta.blob()),
    takeUntil(fromEvent(contenedor, 'click')))
    .subscribe(blob=>{
        contenedor.innerText = '';
        const imgURL = URL.createObjectURL(blob);
        const imgHTML = document.createElement('img');
        imgHTML.src = imgURL;
        contenedor.appendChild(imgHTML);
    })
}

fromEvent(cargar, 'click').subscribe(()=> cargarImagen(imgAleatoria()));