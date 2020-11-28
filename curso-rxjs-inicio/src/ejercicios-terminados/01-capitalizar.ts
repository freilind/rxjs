import { of } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresion, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la funcion capitalizar
 */

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pinguino
 * Hiedra Venenosa
 */
(() =>{

    const nombres = ['batman', 'joker', 'doble cara', 'pinguino', 'hiedra venenosa'];

    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    for( let nombre of nombres ) {
       // console.log( capitalizar(nombre) )
    }

    of(...nombres).pipe(
        map(nombre => capitalizar(nombre))
    ).subscribe(console.log);

})();
