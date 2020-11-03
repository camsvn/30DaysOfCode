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

/*
*   Create an Observable
*       create() method accepts a single argument, which is a subscribe function
*       subscribe function accepts an observer argument
*       next() is emitting a value
*/

var observable = Observable.create((observer:any) => {
    observer.next('Hey Guys');
});

/*
*   Creating a Subscription
*/
observable.subscribe((val:any) => {
    console.log(val)
    addItem(val)
})















//Helper Function to add values to DOM
function addItem(val:any,desc:string=''){
    var liNode = document.createElement('li');
    var ul = document.getElementById('output');
    
    liNode.innerText = `${val} ${desc!=='' ? `(${desc})` : ''}`;
    ul !== null && ul.appendChild(liNode);
}
//eof Helper function