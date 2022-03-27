
// Cargar los dos archivos datos1.json y datos2.json al mismo tiempo.
// https://www.learnrxjs.io/

const datos1 = './datos1.json';
const datos2 = './datos2.json';

const { forkJoin, of } = rxjs;
const { fromFetch } = rxjs.fetch;
const { switchMap, map, catchError } = rxjs.operators;
