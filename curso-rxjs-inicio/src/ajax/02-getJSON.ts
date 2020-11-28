import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { pluck, catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'token': 'ABC123'
});

obs$.subscribe(data => console.log('data:', data));
