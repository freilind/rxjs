import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

const numeros$ = of(1,2,3).pipe(
    startWith('inicio','a','b'),
    endWith('f','i','n')
);

numeros$.subscribe(console.log);

