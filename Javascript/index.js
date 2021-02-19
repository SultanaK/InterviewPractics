function sum(a,b,c) {console.log(a+b+c)  }
function sum(a, b) { console.log(a + b) }

/* sum(1)
sum(1, 2)
sum(1, 2, 3)
sum(1, 2, 3, 4) */
var a = 10
function printName(x) {
  return x = x + 10
}
//console.log(printName(a))

function factorial(n) {
  /* if(n === 1 || n === 0) return 1
  return n * factorial(n - 1) */
  const result = n === 1 || n === 0 ? 1  : n * factorial(n - 1)
    return result 
}

console.log(factorial(5))