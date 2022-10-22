import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn('error en:',err);
    return of([]);
}

ajax(url).pipe(
    pluck('response'),
    catchError(atrapaError)
).subscribe(users => console.log('usuarios:', users));