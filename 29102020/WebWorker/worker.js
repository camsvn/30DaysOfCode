onconnect = function(e) {
    // its property of sharedworkglobalscope and main thread conect to worker onconnect fires//
    var port = e.ports[0];
  
    port.onmessage = function(e) {
      var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
      port.postMessage(workerResult);
    }
  
  }