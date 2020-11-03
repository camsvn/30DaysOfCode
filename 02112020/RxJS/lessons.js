/*
    RxJS:
        -treat a data as a stream
        -API for async programming for reactive streams
*/

/*
    Reactive Programming: 
        it should be possible to express static or dynamic data flows with ease in the programming languages used.
        the underlying execution model will automatically propagate changes through the data flow.

        In Rx programming data flows emitted by one component and the underlying structure provided by the Rx libraries will 
        propagate those changes to another component those are registered to receive those data changes.

        RX = Observable + Observer + Scheduler 
*/

//helper fuction to print values on Webpage 
function print(val){
    let el = document.createElement('p');
    el.innerText = val;
    document.body.appendChild(el);
}

/*
    Oservable: 
    Eg: Array built over time, and can loop over this array over time by subscribing to it.
*/

const observable = rxjs.Observable.create();
console.log(observable)