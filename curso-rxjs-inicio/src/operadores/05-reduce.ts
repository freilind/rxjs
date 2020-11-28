import { interval } from 'rxjs';
import { take, reduce, tap} from 'rxjs/operators';

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer, 0)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});



