import { map,withLatestFrom, take, mergeAll, startWith} from 'rxjs/operators';
import { of, combineLatest, merge, interval, fromEvent } from 'rxjs';
import {fontSize, sleep, addItem, getTime} from './helpers' 

export function joinOps () {
    addItem("Join / Combination Operators",3,'',fontSize.h2)
    /*
    *   CombineLatest: Combines multiple Observables to create an Observable 
    *                 whose values are calculated from 
    *                 the latest values of each of its input Observables.
    */
    addItem("COMBINE-LATEST",3,'',fontSize.h3)
    const weight = of(70,72,76,79,75);
    const height = of(1.76,1.77,1.78);

    const bmi = combineLatest(weight,height).pipe(
        map(([w,h]) => {
            addItem(`${w} : ${h}`,3,'latest values of observables')
            return w / (h * h)
            })
    )
    bmi.subscribe(val => addItem(val,3,'calculated bmi'))

    /*
    *   withLatestFrom: Combines the source Observable with other Observables 
    *                 create an Observable whose values are calculated from the latest values of each 
    *                 only when the source emits.
    */
   addItem('WITH-LATEST-FROM',3,'',fontSize.h3);
   addItem('waiting for keyUp events',3,`view results in console | timer started @${getTime()}`);
   const keyUp = fromEvent(document, 'keyup').pipe(
       map((ev)=> ev.key),
       take(2))
   const timer = interval(1000).pipe(
       map(val => `pressed after ${val}s`)
   )
   const result = keyUp.pipe(withLatestFrom(timer));
   result.subscribe(val => console.log(val))

    /*
    *
    *    MERGE : Creates an output Observable
    *            concurrently emits all values from every given input Observable.
    * 
    *    MERGE-ALL : Converts a higher-order Observable into a first-order Observable
    *               concurrently delivers all values that are emitted on the inner Observables.
    * 
    */
    //MERGE-ALL | START-WITH
    addItem('MERGE-ALL | START-WITH',3,'with concurrent',fontSize.h3);
    addItem('waiting for click events',3,'view results in console');
    const clicks = fromEvent(document, 'click').pipe(take(3));
    const higherOrder = clicks.pipe(
        map(()=> interval(1000).pipe(
            startWith('**New Timer Started**'),
            take(5))
            )
    )
    const firstOrder = higherOrder.pipe(mergeAll(2));
    firstOrder.subscribe(val => console.log(val));

    //MERGE 
    addItem("MERGE",3,'with concurrent',fontSize.h3)
    const timer1 = interval(1000).pipe(
        map(val => addItem(val,3,'timer1 [1s]')),
        take(6));
    const timer2 = interval(2000).pipe(
        map(val => addItem(val,3,'timer2 [2s]')),
        take(6));
    const timer3 = interval(500).pipe(
        map(val => addItem(val,3,'timer3 [500ms]')),
        take(6));
    const concurrent = 2; // the argument
    merge(timer1, timer2, timer3, concurrent).subscribe()
    
    // sleep(12001).then(()=>{
    

    // })
}