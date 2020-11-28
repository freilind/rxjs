import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiete  [next]: ', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completado [obs]')
};

//const obs$ = Observable.create();
const obs$ =  new Observable<string>(subs => {
    subs.next('hola dev');
    subs.next('dev rxjs');

    //forzar error
    /*const a  = undefined;
    a.nombre = 'pepe';*/

    subs.complete();

    subs.next('hola dev');
    subs.next('dev rxjs');
});

//obs$.subscribe(console.log);
/*obs$.subscribe(resp => {
    console.log(resp);
});

obs$.subscribe(
    valor => console.log('next: ', valor),
    error => console.info('error: ', error),
    () => console.info('Completado')
);*/

obs$.subscribe(observer);


