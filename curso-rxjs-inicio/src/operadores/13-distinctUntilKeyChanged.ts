import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';


interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'x'
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
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);


