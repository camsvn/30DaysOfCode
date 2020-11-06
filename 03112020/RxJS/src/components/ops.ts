import {of,fromEvent, interval} from 'rxjs'
import {buffer, take, groupBy, reduce, mergeMap, delay} from 'rxjs/operators'
import {fontSize, sleep, addItem} from './helpers'

export function mainOps () {
    addItem('Transform | Filter | Utility | Mathematical',4,'Operators',fontSize.h2)
    /*
    *   BUFFER: Buffers the source Observable values until closingNotifier emits.
    */
    addItem('BUFFER',4,'',fontSize.h3);
    addItem('waiting for click events',4,`view results in console`);
    const clicks = fromEvent(document, 'click');
    const intervalEvents = interval(1000);
    const buffered = intervalEvents.pipe(buffer(clicks),take(2));
    buffered.subscribe(x => console.table( x));

    /**
     *  GROUP-BY: Groups the items emitted by an Observable 
     *              by specified criterion
     *              emit these grouped items as'Grouped Observables'
     * 
     *  MERGE-MAP: Projects each source value to an Observable
     *              which is merged in the output Observable
     *             PS:
     *                  Maps each value to an Observable, then flattens all of these inner Observables using mergeAll.
     * 
     *  REDUCE: Applies an accumulator function over the source Observable
     *          returns the accumulated result when the source completes
     *      Optional ParaMETER : SEED value
     *          PS:
     *              Combines together all values emitted on the source, using an accumulator function 
     *              that knows how to 
     *              join a new source value into the accumulation from the past. 
     */
    addItem('GROUP-BY | MERGE-MAP | REDUCE',4,'',fontSize.h3);
    of(
        {id: 1, name: 'JavaScript'},
        {id: 2, name: 'Parcel'},
        {id: 2, name: 'webpack'},
        {id: 1, name: 'TypeScript'},
        {id: 1, name: 'CSharp'},
        {id: 3, name: 'TSLint'}
      ).pipe(
        groupBy(p => p.id),
        mergeMap((group$) => group$.pipe(reduce((acc, cur) => [acc,cur])))
    ).subscribe(val =>{
         addItem(JSON.stringify(val),4)
        //  console.log(val)
        })
    
    /**
     *  TAP: Perform a side effect for every emission on the source Observable
     *      PS:  useful for debugging your Observables
     * 
     *  DELAY: Delays the emission of items from the source Observable by a given timeout or until a given Date
     */

    // const tes = fromEvent(document, 'click');
    // const delayedClicks = tes.pipe(delay(1000)); // each click emitted after 1 second
    // delayedClicks.subscribe(x => console.log('Clicked',x));

    /**
     *  MAX : Operates on an Observable that emits numbers.
     *          when source Observable completes it emits a single item: the item with the largest value.
     */
}