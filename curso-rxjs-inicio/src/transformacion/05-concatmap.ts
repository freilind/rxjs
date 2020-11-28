import { fromEvent, interval } from 'rxjs';
import { concatMap } from 'rxjs/operators';

const click$ = fromEvent(document, 'click');
const interval$ = interval(500);

click$.pipe(
    concatMap(()=> interval$)
).subscribe(console.log);

