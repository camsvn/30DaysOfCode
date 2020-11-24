import {from, Subject, interval, BehaviorSubject, ReplaySubject, AsyncSubject} from 'rxjs'
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
    subscription1 = refCounted.subscribe({
    next: (v) => addItem(v,5,'Observer C')
    });
    
    setTimeout(() => {
    subscription2 = refCounted.subscribe({
        next: (v) => addItem(v,5,'Observer D')
    });
    }, 600);
    
    setTimeout(() => {
    addItem("Observer C",5,'unsubscribed')
    subscription1.unsubscribe();
    }, 1200);
    
    // This is when the shared Observable execution will stop, because
    // `refCounted` would have no more subscribers after this
    setTimeout(() => {
    addItem("Observer D",5,'unsubscribed')
    subscription2.unsubscribe();
    }, 2000);

/**
 * 3 variants of subject:
 *      ● Behavior Subject - It stores the latest value emitted to its consumers,
 *                              and whenever a new Observer subscribes,
 *                              it will immediately receive the "current value"
 *      
 *      ● Replay Subject - It can send old values to new subscribers,
 *                              but it can also record a part of the Observable execution.
 *                         ie,
 *                              records multiple values from the Observable execution and replays them to new subscribers.
 * 
 *      ● Async Subject - only the last value of the Observable execution is sent to its observers,
 *                              and only when the execution completes.
 */
    sleep(6002).then(()=>{
//Behavior Subject
        addItem('BehaviorSubjects',5,'',fontSize.h2)

        const behaviorSubject = new BehaviorSubject(0);

        behaviorSubject.subscribe((v) => addItem(v,5,'Observer E'))

        behaviorSubject.next(1);
        behaviorSubject.next(2);

        behaviorSubject.subscribe((v) => addItem(v,5,'Observer F - receives latest value'))

//Replay Subject
        addItem('ReplaySubjects',5,'',fontSize.h2)
        const replaySubject = new ReplaySubject(3);

        replaySubject.subscribe({
            next: (v) => addItem(v,5,'Observer G')
          });
           
        replaySubject.next(1);
        replaySubject.next(2);
        replaySubject.next(3);
        replaySubject.next(4);
        
          replaySubject.subscribe({
            next: (v) => addItem(v,5,'Observer H - buffers 3 values')
        });
        
        replaySubject.next(5);  

//Replay Subject with windowTime
        addItem('ReplaySubjects',5,'with windowTime',fontSize.h3)
        const repWTSubject = new ReplaySubject(10,500);
        
        repWTSubject.subscribe(v => addItem(v,5,'Observer I'))

        const counter = interval(200).pipe(take(9));
        counter.subscribe(v => {
            repWTSubject.next(v)
        })

        setTimeout(() => {
            repWTSubject.subscribe(v => addItem(v,5,'Observer J'))
        },1500)

//AsyncSubject 
        sleep(2250).then(()=>{
            addItem('AsyncSubjects',5,'only the last value of the Observable execution is sent',fontSize.h2)
                const asyncSubjects = new AsyncSubject();

                asyncSubjects.subscribe(v => addItem(v,5,'Observer K'))

                asyncSubjects.next(1)
                asyncSubjects.next(2)
                asyncSubjects.next(3)
                asyncSubjects.next(4)

                asyncSubjects.subscribe(v => addItem(v,5,'Observer L'))

                asyncSubjects.next(5)
                asyncSubjects.complete()
        })
    })   

}