/*Create a function that takes a callback function as an argument.
The function has an array of books, the callback function should return
all the items in the array
*/
function loopThroughArr(item){
    
    item.forEach((i)=>{console.log(i)})
    item.forEach(i => console.log(i))
}

function loopThroughArr2(obj){
    for(i in obj){
        console.log(obj[i])
    }

}
function handleBooks(items, song){
    let books = [
        'Intro to Python', "Intro to Ruby", 'Intro to Java',
        'Intro to C++'
    ];

    let songs = {
        title: "Turtle",
        author: "Drake"
    }
    items(books)
    song(songs)
}
handleBooks(loopThroughArr,loopThroughArr2)

