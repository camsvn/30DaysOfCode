var first = document.querySelector('#number1');
var second = document.querySelector('#number2');
// selecting the number 1 & 2 ....#=id//



var result1 = document.querySelector('.result1');

// selcting the result ...class = .//


if (!!window.SharedWorker) {
  var myWorker = new SharedWorker("worker.js");




  first.onchange = function() {
    myWorker.port.postMessage([first.value, second.value]);
    // first is variable and it is used to send values to worker and array//
    console.log('Message posted to worker');
    // which output a message//
  }




  second.onchange = function() {
    myWorker.port.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }



  myWorker.port.onmessage = function(e) {
    result1.textContent = e.data;
    console.log('Message received from worker');
    console.log(e.lastEventId);
    // onmessage will be in extendable message event//
  }
}