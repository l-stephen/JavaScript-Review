let arr = [1,2,3,4,5,6,7,8,9,10]
for(let i = arr.length-1; i >=0; i--){
    console.log(arr[i])
}
let i = 0
while(i < arr.length){
    console.log(arr[i])
    break;
}
let song = {
    title: "Turtles",
    author: "Drake"
}
for(let a of arr){
    console.log(a)
}

for(let i in song){
    console.log(song[i])
}

function greeting(name){
    console.log("Hello " + name)
}

function input(callback){
    let name = "Stephen"
    callback(name)
}

input(greeting)

let book = [{
    id: 1,
    title: "Intro to JS"
},
{
    id: 2,
    title: "Intro to Ruby"
}]

const printbook = (books) => `${books.title}`
console.log(printbook(book[1]))

let name = "Stephen"

function display(){
    name2 = "John"
    console.log(name2)
    console.log()
}
console.log(name)