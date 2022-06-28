//Create a function to display a greeting
function displayGreeting(){
    console.log("Hello World");
}
displayGreeting();
//Create an arrow function to display a greeting
const greeting = name => {
    console.log(`Hello ${name}`)
}
greeting("Stephen");
//Annoynomous fucntion
let greetings = function(){
    console.log("Hello World");
}
greetings();
//Parameters
function addTwoNum(num1,num2){
    return num1 + num2
}
let number = addTwoNum(2,3)
console.log(number)


function multiple(a,b){
    return a * b
}
console.log(multiple(5,5))

let number2 = (function (number){
    return number * 2
}(4))
console.log(number2)

function divide(a,b){
    return a / b
}
function subtract(a,b){
    return a - b
}
let number3 = divide(10,10)
let number4 = subtract(10,10)
console.log(number3)
console.log(number4)

//Create a callback function that displays a greeting 
function disGreeting(foo){
    return foo()
}
function callback(){
    return "Hello"
}
console.log(disGreeting(callback))

function message(name){
    console.log("Hello " + name)
}
function grade(number){
    message("Stephen")
    if(number > 90){
        return "Thats a A"
    }
    else if(number > 80 && number < 90){
        return "Thats a B"
    }
    else if(number > 70 && number < 80){
        return "Thats a C"
    }
    else if(number > 60 && number < 70){
        return "Thats a B"
    }
    else{
        return "Invalid"
    }
}
let final = grade(75)
console.log(final)