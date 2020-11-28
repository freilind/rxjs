import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';


range(20,10).pipe(
    filter((value, index) => {
        console.log('index', index);
        return value % 2 === 1
    })
)//.subscribe(console.log);

interface Personajes {
    tipo: string,
    nombre: string
}

const personajes: Personajes[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
];

from(personajes).pipe(
    filter(p => p.tipo === 'heroe')
).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map(event => event.code),
    filter(key => key === 'Enter')
);

keyup$.subscribe(console.log);

