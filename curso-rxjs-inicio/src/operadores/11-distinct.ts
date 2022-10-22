import { of, from } from 'rxjs';
import { distinct, skip, takeUntil, tap} from 'rxjs/operators';

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1,6);

numeros$.pipe(
    distinct()
).subscribe(console.log);

interface Personaje {
    nombre: String
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'x'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Dr. willy'
    },
    {
        nombre: 'Zero'
    }
];

from(personajes).pipe(
    distinct(p => p.nombre)
).subscribe(console.log);


