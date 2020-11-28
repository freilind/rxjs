import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

const manejaError = (error: AjaxError) => {
    console.log('error:', error.message);
    return of({
        ok: false,
        usuarios: []
    });
}

const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
);

const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);

obs$.subscribe(data => console.log('getJSON:', data));
obs2$.subscribe(data => console.log('ajax:', data));
