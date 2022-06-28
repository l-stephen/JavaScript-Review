/*Create a greeting fucntion, 
that takes a name and a callback function as parameters,
the callback function should display "I am callback", and the greeting function
should display "Hello" + name
*/
function callTheCallback(){
    console.log("I am callback")
}
function greeting(name, cb, number){
    console.log("Hello " + name + number)
    cb()
}
greeting("Stephen",callTheCallback, 10)
