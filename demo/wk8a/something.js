//array literal because directly in code

let simpleArray = [2, 3, 4, 5, 6]
let objLiteral = {a: 5, b: 4}

//arrays are great for indexing 

console.log(simpleArray)
console.log(objLiteral.a)
console.log(objLiteral["a"])
console.log(simpleArray[0])

//for loops for processing 
let newArray = []
for (let index = 0; index < simpleArray.length; index++){
    
    newArray.push(simpleArray[index]= simpleArray[index] +2)
}
// sum = sum + simpleArray[index]
// console.log(sum)

//