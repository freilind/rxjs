import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

/**
 * Ejercicio: Realizar una cuenta regresiva
 * empezando de 7
 */

// Salida esperada ===
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(() =>{

    const inicio = 7;
    const countdown$ = interval(100).pipe(
        // Usar los operadores necesarios
        // para realizar la cuenta regresiva
        map(x => inicio - x),
        take(inicio + 1)
    );

    // No tocar esta linea ==================
    countdown$.subscribe( console.log ); // =
    // ======================================


})();
