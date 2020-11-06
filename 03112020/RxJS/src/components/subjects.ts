import {from, Subject, interval} from 'rxjs'
import {multicast, refCount, take} from 'rxjs/operators'
import {fontSize, sleep, addItem} from './helpers'

export function subjects (){
    addItem('Subjects',5,'',fontSize.h2)

    //Subject as Observable
    addItem('Subject as Observable',5,'',fontSize.h3)
    const subject = new Subject<string>()
    
    subject.subscribe({
        next: (v) => addItem(v,5,'Observer A')
    });
    subject.subscribe({
        next: (v) => addItem(v,5,'Observer B')
    });
    
    subject.next('Hello');
    subject.next('How ya doin');

    //Subject as Observer
    addItem('Subject as Observer',5,"convert unicast 'from' to multicast",fontSize.h3)
    const observable = from([1,2,3]);
    observable.subscribe(subject);

    addItem('MultiCast | RefCount',5,'',fontSize.h3);

    const source = interval(500).pipe(take(12));
    const subject1 = new Subject();
    const refCounted = source.pipe(multicast(subject1), refCount());
    let subscription1, subscription2;
    
    // This calls `connect()`, because
    // it is the first subscriber to `refCounted`
    console.log('observerA subscribed');
    subscription1 = refCounted.subscribe({
    next: (v) => addItem(v,5,'Observer C')
    });
    
    setTimeout(() => {
    console.log('observerB subscribed');
    subscription2 = refCounted.subscribe({
        next: (v) => console.log(v,5,'Observer D')
    });
    }, 600);
    
    setTimeout(() => {
    console.log('observerA unsubscribed');
    subscription1.unsubscribe();
    }, 1200);
    
    // This is when the shared Observable execution will stop, because
    // `refCounted` would have no more subscribers after this
    setTimeout(() => {
    console.log('observerB unsubscribed');
    subscription2.unsubscribe();
    }, 2000);

}