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

const obs$ = ajax.post(url, {
    id: 1,
    nombre: 'pepe'
},{
    token: 'ABC123'
}).pipe(
    catchError(manejaError)
);

obs$.subscribe(data => console.log('post:', data));

ajax({
    url: url,
    method: 'PUT',
    headers: {
        token: 'ABC123'
    },
    body: {
        id: 1,
        nombre: 'pepe'
    }
}).subscribe(console.log);
