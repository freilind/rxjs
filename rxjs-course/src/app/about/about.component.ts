import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {
    concat,
    fromEvent,
    interval,
    noop,
    observable,
    Observable,
    of,
    timer,
    merge,
    Subject,
    BehaviorSubject,
    AsyncSubject,
    ReplaySubject
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';


@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    ngOnInit() {
        /*
        //const interval$ = interval(1000);
        const interval$ = timer(2000, 1000);
        interval$.subscribe(console.log);

        const click$ = fromEvent(document, 'click');
        //click$.subscribe(console.log);
        click$.subscribe(
            evt => console.log(evt),
            err => console.log(err),
            () =>console.log("completed")
        );
        */

        const http$ = createHttpObservable('/api/courses');

        const courses$ = http$.pipe(
            map(res => Object.values(res['payload']))
        );

        courses$.subscribe(
            courses => console.log(courses),
            noop,
            () => console.log('complete')
        );
    }

}






