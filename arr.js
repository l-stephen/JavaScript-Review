/*let letters = ['a','b','c','d', 'e']
letters.forEach((i)=>{
    console.log(i)
})
*/
let numbers = [1,2,3,4,5,6,7,8,9,10]
let letters = ['a','b','c','d','e','fgh']
let num = numbers.map(i => i * 2)
let filtered = numbers.filter((i) => {i > 9})
let filtered2 = numbers.filter(j => j % 2 == 0)
let filtered3 = letters.filter(l => l.length > 1)
console.log(num)
console.log(filtered)
console.log(filtered2)
console.log(filtered3)
console.log(numbers)

let arr2 = [1,2,3,4,5,6,7]
let array = arr2.find(i => i > 3)
let n = 0
let array2 = arr2.reduce((i,j) => i * j, 1)
console.log(array2)
console.log(array)


