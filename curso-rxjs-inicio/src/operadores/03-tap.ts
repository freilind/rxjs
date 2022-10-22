import { range,  } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const numbers$ = range(1,5);

numbers$.pipe(
    tap(x => {
        console.log('antes', x)
        return 100; //el tap no afecta los valores de la salida o el flujo
    }),
    map(val => val * 10),
    tap({
        next: valor => console.log('despues', valor),
        complete: () =>console.log('Se termino todo')
    })
).subscribe(val => console.log('subs', val));



