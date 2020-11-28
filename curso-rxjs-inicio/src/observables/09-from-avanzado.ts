import { of, from } from 'rxjs';

/**
 * of = toma args y genera secuencia
 * from= array, promise, iterable, observable
 */


const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

//const sources$ = from([1,2,3,4,5]);
//const sources$ = of(...[1,2,3,4,5]);
const sources$ = from(fetch('https://api.github.com/users/klerith'));

/*
sources$.subscribe(async observer => {
    console.log(observer);
    const dataResp =await observer.json();
    console.log(dataResp);
});
*/

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

/*
for(let id of miIterable) {
    console.log(id);
}
*/

from(miIterable).subscribe(observer);


