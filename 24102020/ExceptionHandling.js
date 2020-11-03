let THROW_ERROR = true

try {
    THROW_ERROR ? (()=>{throw new Error('Whoops!')})() : console.log("Hi There") ;
} catch (e) {
    console.log(e.name  + ': ' + e.message)
} finally {
    console.log("Excetute any ways.")
}