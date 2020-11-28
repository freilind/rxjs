import { GithubUsersResp } from './../interfaces/github-users.interface';
import { GithubUser } from './../interfaces/github-user.interface';
import { fromEvent, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { pluck, debounceTime, map, mergeAll, mergeMap, switchMap } from 'rxjs/operators';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

const mostrarUsuarios = (usuarios: GithubUser[]) =>{
    orderList.innerHTML='';
    for(const usuario of usuarios) {
        const li= document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.href = 'ver página';
        anchor.href = '_blank';

        li.append(img);
        li.append(usuario.login + ' ');
        li.append(anchor);
        orderList.append(li);
    }
}

const url = `https://api.github.com/search/users?q=`;
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(700),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GithubUsersResp>>(data =>{
        return ajax.getJSON(`${url}${data}`)
    }),
    pluck<GithubUsersResp, GithubUser[]>('items')
)//.subscribe(mostrarUsuarios);

const url2 = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target','value'),
    switchMap(texto => ajax.getJSON(url + texto))
).subscribe(console.log);


