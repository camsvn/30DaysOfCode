// https://www.sitepoint.com/exceptional-exception-handling-in-javascript/

/**
 * Possible try..catch combinations
 *      ● try...catch
 *      ● try...catch..finally
 *      ● try...finally - 'finally' : will be executed even if the “try” or “catch” clause executes a “return” statement. 
 */

let THROW_ERROR = true

try {
    THROW_ERROR ? (()=>{throw new Error('Whoops!')})() : console.log("Hi There") ;
} catch (e) {
    console.log(e.name  + ': ' + e.message)
} finally {
    console.log("Excetute any ways.")
}

/**
 * Exception Handing: Error Types
 *      ● RangeError
 *      ● ReferenceError
 *      ● SyntaxError
 *      ● TypeError
 *      ● URIError
 *      ● EvalError
 */

var pi = 3.14159;
try {
    /**
     * toFixed() is a method available in JS Number
     * representing the number of digits to appear after a decimal point.
     */ 
    pi.toFixed(1000)
} catch (error) {
    console.log(error instanceof ReferenceError)
    console.log(error instanceof RangeError)
    console.log(`${error.name} - ${error.message}`)
    // console.log(error.stack)
}
// pi.toFixed(1000);


console.log("\n******ReThrow Error*******")
// let json = '{ "age": 30 }'; // incomplete data
let json = '{ "age": 30, "name": "Amal" }'; // incomplete data
try {
    try {
        let user = JSON.parse(json);
        if (!user.name) {
            throw new SyntaxError("Incomplete data: no name");
        }

        blabla(); // unexpected error
        console.log( user.name );
    } catch(e) {
        if (e instanceof SyntaxError) {
            console.log( "JSON Error: " + e.message );
        } else {
            throw e; // rethrow (*)
            // console.log(e.name)
        }
    }
} catch (error) {
    console.log("Unexpected Error: ", `${error.name} - ${error.message}`) // error caught outside
}


console.log("\n******Custom Error*******")

class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  
  function test() {
    throw new ValidationError("Whoops!");
  }
  
  try {
    test();
  } catch(err) {
    console.log(err.name ,err.message);
    // console.log(err.stack);
  }


  /**
   * Custom Errors by 
   *        Object Constructors
   */
  console.log("\n******Custom Error - Object Constructor*******")

  function DivisionByZeroError(message) {
    this.name = "DivisionByZeroError";
    this.message = (message || "");
  }
  
  DivisionByZeroError.prototype = new RangeError();
  DivisionByZeroError.prototype.constructor = DivisionByZeroError;

  try {
      let denomenator = 0;
      if( denomenator === 0)
        throw new DivisionByZeroError("Denomenator should not be 0")
  } catch(e){
      console.log(e instanceof DivisionByZeroError)
      console.log(e.name,':',e.message)
  }
