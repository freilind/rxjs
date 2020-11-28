import { Observable, Observer, Subscriber } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    // crear un contador 1, 2,3,4,5
    let count = 0;
    const interval = setInterval( () => {
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('intervalo destruido');
    }

});

const subs1 = intervalo$.subscribe(observer);
const subs2= intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

subs1.add( subs2).add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
   /* subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();*/
}, 5000)
