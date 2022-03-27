
// Cargar los dos archivos datos1.json y datos2.json al mismo tiempo.
// https://www.learnrxjs.io/

const datos1 = './datos1.json';
const datos2 = './datos2.json';

const { forkJoin, of } = rxjs;
const { fromFetch } = rxjs.fetch;
const { switchMap, map, catchError } = rxjs.operators;

function cargarDatos(url){
    return fromFetch(url)
    .pipe(switchMap(respuesta=>{
        if(respuesta.ok){
            return respuesta.json();
        }else{
            return of({error: true, mensaje: `Error ${respuesta.status}`});
        }
    }), catchError(error=> of({error: true, mensaje: error.message})));
}

forkJoin({datos1: cargarDatos(datos1), datos2: cargarDatos(datos2)})
.subscribe(console.log);