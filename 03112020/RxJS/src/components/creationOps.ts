/*
*   ▣ 2 Types of Operators:
*       ● Pipeable Opeartor
*       ● Creation Opeartor
*
*       → Pipeable Operator: A Pipeable Operator is a function that takes an Observable as its input and returns another Observable.
*                          It is a pure operation: the previous Observable stays unmodified.
*       
*       → Creation Operator: standalone functions to create a new Observable.
*                  USED to : create an Observable with some common predefined behavior or by joining other Observables.
*
*
*   ▣ Higher-Order Observables: Observables of Observables
*           HOO are handled by flattening: converting a HOO into an ordinary Observable.
*               concatAll()
*               mergeAll()
*               switchAll()
*               exhaust()
*               flatMap()
*               concatMap()
*               mergeMap()
*               switchMap()
*               exhaustMap()       
*/
import { ajax } from 'rxjs/ajax';
import { map, catchError, throttle, take} from 'rxjs/operators';
import { from, of, fromEvent, interval, range, throwError, concat } from 'rxjs';
import {fontSize, sleep, addItem} from './helpers' 

export function creationOps () {
    addItem('Creation Operation',2,'',fontSize.h2)

/*
*   AJAX:
*/
    addItem('AJAX',2,'',fontSize.h2)
    //Fetch Respose Object   
    ajax(`https://api.agify.io/?name=amel`).pipe(
    map(userResponse => {
        addItem('Ajax()',2,'fetch response object returned frm API',fontSize.h3)
        addItem(`${JSON.stringify(userResponse.response)}`, 2,'Response: AjaxResponse')
    }),
    catchError(error => {
        addItem(`error: ${error}`, 2);
        return of(error);
    })
    ).subscribe();

    //ajax.getJSON()
    ajax.getJSON(`https://api.agify.io/?name=amel`).pipe(
    map(userResponse => {
        addItem('Ajax()',2,'fetch data from API',fontSize.h3)
        addItem(JSON.stringify(userResponse),2,'Response: Data from API')
    }),
    catchError(error => {
        addItem(error,2);
        return of(error);
    })
    ).subscribe();

    //ajax() with object as argument
    const POST_METHOD = {
        url: 'https://httpbin.org/delay/2',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'rxjs-custom-header': 'Rxjs'
        },
        body: {
            rxjs: 'Hello World!'
        }
    }

    ajax(POST_METHOD).pipe(
        map(res => {
            addItem('ajax() with object as argument POST method',2,undefined,fontSize.h3)
            addItem(res.response.data,2,'Response of POST request with 2s delay')
        }),
        catchError(err => {
            addItem(err,2)
            return of(err)
        })
    ).subscribe()

    ajax(`https://api.github.com/404`).pipe(
        map(userResponse => console.log('users: ', userResponse)),
        catchError(error => {
            addItem('ajax() fetch',2,'Handle Error',fontSize.h3)
            addItem(error,2,'Error Object returned from request');
            return of(error);
        })
    ).subscribe()

    sleep(3001).then(()=>{
        addItem('',2)
        /*
        *   FROM : Creates an Observable from 
        *       ● an Array
        *       ● an array-like object
        *       ● a Promise
        *       ● an iterable object
        *       ● an Observable-like object.
        */
        addItem('FROM',2,'obeservables from Array | Object | Promise | Iterable Objects',fontSize.h2)

        //Array to Observabe
        addItem('Array to Observable',2,'',fontSize.h3)
        const array = [10, 20, 30];
        from(array).subscribe(val =>addItem(val,2)) 
        
        /*
        *  fromEvent: Creates an Observable that emits events of a specific type coming from the given event target.
        */
        addItem('fromEvent and throttle',2,'',fontSize.h3)
        addItem('Waiting for mouseMove event',2,'Observable Closes in 3s | throttled to 500ms')
        const feOnbservable = fromEvent(document, 'mousemove')
        const throttlefeOnbservable = feOnbservable.pipe(throttle(() => interval(500)))
        const mouseMoveObserver = throttlefeOnbservable.subscribe(ev => addItem(`x: ${ev.screenX} | y: ${ev.screenY}`,2))
        setTimeout(() =>{
            mouseMoveObserver.unsubscribe();
            addItem('',2,'Closing fromEvent Observable')
        },3000)   
        
        /*
        *   INTERVAL : Creates an Observable that emits sequential numbers 
        *            every specified interval of time
        *            on a specified SchedulerLike.
        *
        *   take() : limits to specified number
        */
        sleep(3000).then(()=>{
            addItem('',2)
            addItem('INTERVAL',2,'emits sequential numbers every specified interval of time',fontSize.h2)
            interval(1000).pipe(take(5)).subscribe(val => {
                addItem(val,2)
            })
            /*
            *   of : Converts the arguments to an observable sequence
            *       Each argument becomes a next notification
            *   
            *   range : Creates an Observable that emits a sequence of numbers within a specified range.
            * 
            *   throwError: create observables that emits error notification
            * 
            *   timer : Creates an Observable that starts emitting after an dueTime 
            *           and emits ever increasing numbers after each period of time thereafter.
            * 
            *   iif : Decides at subscription time which Observable will actually be subscribed.
            */
            sleep(5001).then(()=>{
                //range
                addItem('',2)
                addItem('RANGE',2,'emit numbers within specified range',fontSize.h2)
                range(5,6).subscribe(val => addItem(val,2))
                //throwError | of
                addItem('',2)
                addItem('OF | THROW-ERROR',2,'emit error notification',fontSize.h2)
                //concat: execute observables sequentially
                concat(of(7,10,'Hello'), throwError('Emitting Error Message!'))
                    .subscribe(
                        (val) => addItem(val,2,`from 'of' observable`),
                        (err) => addItem(err,2,`from 'throwError' observable`)
                    )
                
            })
        })        
        

    })

}

