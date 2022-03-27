
// Buscar elemento dentro del DOM utilizando recursión y RxJS.

const elemento = 'Elemento9';

const { EMPTY, from, Subject, of } = rxjs;
const { expand, takeWhile } = rxjs.operators;

const fuente$ = of(document.body);

fuente$.pipe(expand(nodo=> {
    if(nodo.innerHTML === elemento || nodo.innerText === elemento){
        return of(true);
    }

    if(!nodo || !nodo.children || nodo.children.length === 0){
        return EMPTY;
    }

    const arr = [];
    for(const hijo of nodo.children){
        arr.push(hijo);
    }

    return from(arr);
}), takeWhile(valor=> valor !== true, true)).subscribe(encontrado=>{
    console.log(encontrado);
})