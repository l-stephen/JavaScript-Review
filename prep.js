function isDog(dog){
    if(dog === "Brindle"){
        return "Hi Brindle"
    }
    else if (typeof dog != 'string'){
        return 'NA'
    }
    else{
        return "Please enter a dog name"
    }
}
isDog("Brindle")

const simple = function(){
    console.log("Hello")
}
simple()

const books = (book) => {
    console.log(book)
}
books("Inro to Javascript")

const book = (b,author) => console.log(b,author)
book("Inro to JavaScript", "Lambert")


