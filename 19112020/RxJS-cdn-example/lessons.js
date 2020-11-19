/*
 *  For version 5.4.3 use 'Rx'
 *  For latest version use 'rxjs' 
 */

const observable = rxjs.Observable.create( observer => {
    observer.next('Hey There!')
    observer.next('How you peeps doing')
})
observable.subscribe(val => print(val))

// ------- fromEvent ---------
const clicks = rxjs.fromEvent(document, 'click').pipe(rxjs.operators.take(3));
const higherOrder = clicks.pipe(
    rxjs.operators.map(()=> rxjs.interval(1000).pipe(
        rxjs.operators.startWith('**New Timer Started**'),
        rxjs.operators.take(5))
        )
)
const firstOrder = higherOrder.pipe(rxjs.operators.mergeAll(2));
firstOrder.subscribe(val => console.log(val));



// HELPER FUNCTION
function print (val) {
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}