/*
*   ● Stream:  in the RxJS world simply represents values over time
*       Example: Users sending chat messages, a user clicking around on a page, a user filling out different formfields in a form;
*   
*   ● Observables | Observers | Subscription 
*   
*       ● Observables is a  function that produces a stream of values to an observer over time.
*   
*       ● Observer subscribes to an Observable.
*
*       ● Observables can have multiple observers.
*/

import {Observable} from 'rxjs';
import {share} from 'rxjs/operators'
import {fontSize, sleep, addItem} from './helpers' 

/* ******************BEGIN Observables************************ */

/*
*   Create an Observable
*       create() method accepts a single argument, which is a subscribe function
*       subscribe function accepts an observer argument
*       next() is emitting a value
*/

addItem('Observables | Observer',1,'',fontSize.h2)

var observable = Observable.create((observer:any) => {
    setInterval(()=> observer.next('Hello!!'),2000)
});

/*
*   Creating a Subscription
*       Multiple Observer can subscribe to same Observable
*/

addItem('Create | Subscribe | Dispose',1,'Unsubscribe after 6001ms',fontSize.h3)
let observer1 = observable.subscribe((val:any) => {
    addItem(val,1,'prints every 2s')
})

let observer2 = observable.subscribe((val:any) => {
    addItem(val,1,'Observer 2 | prints every 2s')
})
/*
*   Child Subscription - action on parent observer affects its children
*/
observer1.add(observer2);

setTimeout(()=> observer1.unsubscribe(),6001)

sleep(6500)
    .then(()=>{
/*
*   Code inside Observable is called Observable Execution
*   3 types of values Observable Execution acn deliver
*       ● "Next" notification: sends a value such as a Number, a String, an Object, etc.
*       ● "Error" notification: sends a JavaScript Error or exception.
*       ● "Complete" notification: does not send a value.
*/ 
        addItem('Execute',1,'next | error | complete',fontSize.h3)

        const observable = new Observable(function subscribe(subscriber) {
            try {
              subscriber.next('Hey guys!');
              subscriber.next('How are you?');
              subscriber.next('Before complete()');
              subscriber.complete();
              subscriber.next('This will not send');
            } catch (err) {
              subscriber.error(err); // delivers an error if it caught one
            }
          });

        observable.subscribe(
            (val:any) => addItem(val,1),
            (error:any) => addItem(error,1),
            ()=>addItem('Completed',1)
        )
        
        sleep(1000)
        .then(()=>{
/*
*   HOT vs COLD Observables
*       producer is emitting values outside of the observable.
*       adding the .share() operator | share the same source to multiple subscribers
*
*/
            addItem('Hot Observable',1,'warm',fontSize.h3)   
            
            const warmObservable = Observable.create((observer:any)=>{
                observer.next('First Notification')
                observer.next('Second Notification')
                setInterval(()=>{
                    observer.next('Notifications Every 2s')
                },2000)
            }).pipe(share());

            const warmObserver1 = warmObservable.subscribe((val: any) => {
                addItem(val,1,'Observer 1')
            })

            setTimeout(() => {
                const warmObserver2 = warmObservable.subscribe((val: any) => {
                    addItem(val,1,'Observer 2')
                })
                warmObserver1.add(warmObserver2);
            },1000)

            setTimeout(()=> warmObserver1.unsubscribe(),6001)

        })
    })

/*
*   LIST of creation operators to create observables
*      ● Of
*      ● FromEventPattern
*      ● FromEvent
*      ● FromPromise
*      ● Interval
*      ● Range
*      ● Timer
*      ● Empty
*      ● Throw
*      ● Never
*/

/* ******************EOF Observables************************ */