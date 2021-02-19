/* let calculate = function (num1, num2, type) { 
  let sum = (type === 'add') ? num1 + num2
 } */

let add = (a, b) => { return (a + b) }
let multiply = (a, b) => {
  return a*b
}
let calculate = (num1, num2, callback) => {
   return callback(num1,num2)
}
 console.log(calculate(2,3,add))
 console.log(calculate(2,3,multiply))