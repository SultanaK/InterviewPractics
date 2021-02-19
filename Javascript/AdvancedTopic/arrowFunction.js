let numbers = [30, 3, 40, 5, 55, 200, 34,]
console.log(`List: ${numbers}`)
let sortNumber = numbers.sort((a, b) => a - b)
console.log( `Sorted list:  ${sortNumber}`)

let double = numbers.map(a => a * 2)

console.log(`Double:  ${double}`)

let filter = numbers.filter(a => a > 40)
console.log(`Filter number grater than 30 :  ${filter}`)