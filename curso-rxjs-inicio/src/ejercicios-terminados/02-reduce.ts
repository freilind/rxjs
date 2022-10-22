import { from } from 'rxjs';
import { filter, reduce } from 'rxjs/operators';

/**
 * Ejercicio: 
 * Sume todos los numeros del arreglo usando un reduce.
 * Debe de filtrar para que solo numeros sean procesados
 * La salida debe de ser 32
 * 
 * Tip:
 * isNan() es una funcion de JavaScript para determinar si es numero
 * Usar filter<any>(...) para no tener problemas de tipado.
 */

(() =>{


  const datos = [1, 2, 'foo', 3, 5, 6, 'bar', 7, 8];

  from(datos).pipe(
    filter<any>(x => isNaN(x) === false),
    reduce((acc, act) => acc + act,0)
  ).subscribe( console.log ) // La salida debe de ser 32

})();
